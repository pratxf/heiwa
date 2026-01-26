# Deploying Heiwa to Netlify

Since the automated deployment tool is encountering issues, you can easily deploy the site manually.

The project has already been built successfully. The static files are located in the `out/` folder.

## Option 1: Drag & Drop (Easiest)
1. Go to [app.netlify.com](https://app.netlify.com).
2. Log in to your account.
3. Drag the **`out`** folder from your project directory and drop it onto the Netlify dashboard.
4. Your site will be deployed immediately!

## Option 2: Netlify CLI
If you prefer the command line:

1. Run the deploy command:
   ```bash
   npx netlify deploy --prod --dir=out
   ```
2. Follow the prompts to link your site (Create new site -> Enter name).

Your site is ready! 🚀
