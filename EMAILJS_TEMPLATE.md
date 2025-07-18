# EmailJS Template for Contact Form

## Subject
New Contact Form Submission - {{subject}}

## Body
You have received a new message from your website contact form.

### Details:
- **First Name:** {{firstName}}  
- **Last Name:** {{lastName}}  
- **Email Address:** {{email}}  
- **Phone Number:** {{phone}}  
- **Subject:** {{subject}}  

### Message:
{{message}}

Please review the message and respond accordingly.

---

**Note:**  
Make sure the placeholder names exactly match the keys in your React formData object: `firstName`, `lastName`, `email`, `phone`, `subject`, `message`.
