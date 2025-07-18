# Full-Stack Deployment Guide for GoDaddy VPS

This guide provides detailed, step-by-step instructions for deploying your full-stack Node.js and React application to a GoDaddy Virtual Private Server (VPS).

---

## **Prerequisites**

1.  **GoDaddy VPS Plan:** You **must** have a VPS or Dedicated Server plan. Basic shared hosting plans are not suitable for running a Node.js backend.
2.  **Domain Name:** Your domain name should be registered and managed through GoDaddy.
3.  **SSH Client:** A tool to connect to your server.
    *   **Windows:** Use PowerShell, Command Prompt, or [PuTTY](https://www.putty.org/).
    *   **macOS/Linux:** Use the built-in `Terminal` application.
4.  **Code on GitHub/GitLab (Recommended):** Your project should be in a Git repository (e.g., GitHub, GitLab) for the most efficient deployment workflow.

---

## **Phase 1: Prepare Your Application for Production**

This step bundles your frontend and backend code into an optimized `dist` directory, ready for deployment.

1.  **Understand the Build Process**
    Your `package.json` file contains a `build` script:
    ```json
    "scripts": {
      "build": "vite build && esbuild server/index.js --platform=node --packages=external --bundle --format=esm --outdir=dist"
    }
    ```
    -   `vite build`: Compiles your React frontend application into static HTML, CSS, and JavaScript files inside `dist/client`.
    -   `esbuild ...`: Bundles your Express.js server code into a single, efficient file at `dist/index.js`.

2.  **Run the Build Command**
    Execute this command in your local project terminal:
    ```bash
    npm run build
    ```
    After it completes successfully, you will have a new `dist` folder in your project. This is the only folder you need to deploy to the server, along with `package.json` for installing dependencies.

---

## **Phase 2: Set Up Your GoDaddy VPS**

Connect to your server and install the necessary software to run your application.

1.  **Connect to Your VPS via SSH**
    Find your server's IP address and login credentials in your GoDaddy dashboard.
    ```bash
    # Replace with your actual username and IP address
    ssh your_username@your_server_ip
    ```
    You will be prompted for your password to log in.

2.  **Update Your Server**
    It's good practice to update the package lists on your new server.
    ```bash
    # This command is for Debian/Ubuntu-based systems, which are common for VPS hosting.
    sudo apt-get update && sudo apt-get upgrade -y
    ```

3.  **Install Node.js and npm**
    Your application runs on Node.js. Install it using NodeSource for a recent version.
    ```bash
    # Get the setup script for Node.js 20.x (a stable LTS version)
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    
    # Install Node.js (npm is included)
    sudo apt-get install -y nodejs
    
    # Verify the installation
    node -v  # Should show something like v20.x.x
    npm -v   # Should show a corresponding npm version
    ```

4.  **Install PM2 Process Manager**
    PM2 is a powerful tool that will keep your Node.js application running 24/7. It automatically restarts the app if it crashes and manages it in the background.
    ```bash
    # Install PM2 globally using npm
    sudo npm install -g pm2
    ```

---

## **Phase 3: Deploy Your Code to the VPS**

Get your application code from your computer onto the server.

### **Method A: Using Git (Highly Recommended)**

This is the cleanest and most maintainable method.

1.  **Install Git on VPS**
    ```bash
    sudo apt-get install -y git
    ```

2.  **Clone Your Repository**
    Clone your project from GitHub/GitLab onto the server. Use a private repository for security.
    ```bash
    # Clone into a folder, e.g., 'my-app'
    git clone https://github.com/your-username/your-repo.git my-app
    
    # Navigate into the new directory
    cd my-app
    ```

3.  **Install Production Dependencies**
    Inside your project directory, install only the packages needed for the application to run (no development tools).
    ```bash
    npm install --production
    ```

4.  **Build the Application on the Server**
    Now that the source code is on the server, run the build script.
    ```bash
    npm run build
    ```

### **Method B: Using SCP (Simpler Alternative)**

Use this method if you are not using Git.

1.  **Package Your Files Locally**
    On your **local machine**, create a `.zip` file containing:
    -   The entire `dist` folder.
    -   The `package.json` file.
    -   The `package-lock.json` file.

2.  **Upload the ZIP to the Server**
    From your **local terminal**, use the `scp` command to copy the file.
    ```bash
    # Example: scp [local_file_path] [user]@[server_ip]:[remote_path]
    scp ./project.zip your_username@your_server_ip:/home/your_username/
    ```

3.  **Unpack and Install on the Server**
    Back in your **SSH session on the server**:
    ```bash
    # Install the unzip tool if you don't have it
    sudo apt-get install -y unzip
    
    # Unzip your project and create a directory for it
    unzip project.zip -d my-app
    
    # Navigate into the directory
    cd my-app
    
    # Install dependencies
    npm install --production
    ```

### **Start Your Application with PM2**

1.  **Start the Server**
    From your project's root directory (`my-app`), use PM2 to run the `start` script from your `package.json`.
    ```bash
    # The --name flag gives your process an easy-to-remember name
    pm2 start npm --name "pavansut-website" -- run start
    ```

2.  **Check the Status**
    Verify that the application is running.
    ```bash
    pm2 status
    # You should see 'pavansut-website' with a status of 'online'
    ```

3.  **Enable PM2 on Server Reboot**
    This crucial step ensures that if your VPS restarts, PM2 will automatically restart your application.
    ```bash
    pm2 save
    pm2 startup
    ```
    PM2 will show you a command that you need to copy and run. It will look something like `sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u your_username --hp /home/your_username`. **Run the command it gives you.**

---

## **Phase 4: Configure Nginx as a Reverse Proxy**

Your app is running on `localhost:5001`. Nginx will expose it to the world on the standard web ports (80 for HTTP) and connect it to your domain.

1.  **Install Nginx**
    ```bash
    sudo apt-get install -y nginx
    ```

2.  **Configure the Firewall**
    Allow Nginx traffic through the firewall.
    ```bash
    sudo ufw allow 'Nginx Full'
    ```

3.  **Create an Nginx Configuration File**
    Use the `nano` text editor to create a config file for your site. **Replace `your_domain.com` with your actual domain.**
    ```bash
    sudo nano /etc/nginx/sites-available/your_domain.com
    ```

4.  **Paste the Nginx Configuration**
    This is the most important part. This config tells Nginx to forward all traffic to your Node.js app.
    ```nginx
    # Paste this into the nano editor. Replace your_domain.com with your domain.
    server {
        listen 80;
        listen [::]:80;

        server_name your_domain.com www.your_domain.com;

        location / {
            # Forward requests to your app running on port 5001
            proxy_pass http://localhost:5001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
    Save the file and exit `nano` (Ctrl+X, then Y, then Enter).

5.  **Enable the Configuration**
    Create a symbolic link from your config file to the `sites-enabled` directory.
    ```bash
    sudo ln -s /etc/nginx/sites-available/your_domain.com /etc/nginx/sites-enabled/
    ```

6.  **Test and Restart Nginx**
    ```bash
    sudo nginx -t          # Test for syntax errors
    sudo systemctl restart nginx # Apply the changes
    ```

7.  **Update GoDaddy DNS Settings**
    -   Log in to your GoDaddy account.
    -   Go to your DNS management page for the domain.
    -   Find the **'A' record** for the root domain (`@`).
    -   Set its value to your **VPS IP address**.
    -   Find the **'CNAME' record** for `www` and ensure it points to `@` or your root domain.
    -   *DNS changes can take anywhere from a few minutes to 48 hours to propagate.*

At this point, you should be able to visit `http://your_domain.com` and see your website!

---

## **Phase 5: Secure Your Site with SSL (HTTPS)**

Add a free SSL certificate from Let's Encrypt to enable HTTPS.

1.  **Install Certbot**
    Certbot is a tool that automates setting up SSL certificates.
    ```bash
    sudo apt-get install -y certbot python3-certbot-nginx
    ```

2.  **Obtain the SSL Certificate**
    Certbot will communicate with Let's Encrypt and automatically update your Nginx configuration.
    ```bash
    # Replace with your domain(s)
    sudo certbot --nginx -d your_domain.com -d www.your_domain.com
    ```
    -   Follow the on-screen prompts.
    -   It will ask for an email address for renewal notices.
    -   Agree to the terms of service.
    -   When asked, choose the option to **redirect HTTP traffic to HTTPS**. This is more secure.

Certbot will automatically configure Nginx and reload it. Your site is now secure and accessible via `https://your_domain.com`.

---

## **Phase 6: Future Deployments (Updating Your Site)**

To update your site in the future, the process is much simpler.

1.  **SSH into your VPS.**
2.  **Navigate to your project directory:** `cd my-app`
3.  **Pull the latest code:** `git pull`
4.  **Install any new dependencies:** `npm install --production`
5.  **Re-build the application:** `npm run build`
6.  **Restart the PM2 process:** `pm2 restart pavansut-website`

Your updated site will be live in seconds.
