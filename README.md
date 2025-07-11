# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a2d00617-470c-4361-92f0-9c2bba85f5e5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a2d00617-470c-4361-92f0-9c2bba85f5e5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. Here's how to set it up:

1. **Push your code to GitHub**: Make sure all your changes are committed and pushed to your GitHub repository.

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click "Save"

3. **Automatic Deployment**: Every time you push to the `main` or `master` branch, GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

4. **Access your site**: Your site will be available at `https://yourusername.github.io/your-repo-name`

### Alternative: Lovable Deployment

You can also deploy using Lovable by opening [Lovable](https://lovable.dev/projects/a2d00617-470c-4361-92f0-9c2bba85f5e5) and clicking on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
