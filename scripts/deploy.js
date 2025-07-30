import ghpages from 'gh-pages';
import { readFileSync } from 'fs';

// Read homepage URL from package.json
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

// Deploy the dist folder
ghpages.publish('dist', (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Published');
    if (packageJson.homepage) {
      console.log('Site URL:', packageJson.homepage);
    }
  }
});
