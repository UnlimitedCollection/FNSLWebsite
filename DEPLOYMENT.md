# Deploying FNSL Website to Vercel

Since your code is pushed to GitHub, expanding to Vercel is the easiest step.

## Option 1: Vercel Dashboard (Recommended)

1.  **Log in** to [Vercel](https://vercel.com).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Import"** next to the `FNSLWebsite` repository.
4.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Environment Variables** (CRITICAL):
        Expand the "Environment Variables" section and add:

        | Key | Value |
        | :--- | :--- |
        | `NEXT_PUBLIC_SANITY_PROJECT_ID` | *Your Sanity Project ID* (from sanity.io) |
        | `NEXT_PUBLIC_SANITY_DATASET` | `production` |

5.  Click **"Deploy"**.

## Option 2: Command Line

If you prefer using the terminal:

1.  Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```
2.  Log in:
    ```bash
    vercel login
    ```
3.  Deploy:
    ```bash
    vercel
    ```
    (Follow the prompts, saying "Yes" to default settings).

## After Deployment

### Connect Sanity CORS
Once your site is live (e.g., `https://fnsl-website.vercel.app`):
1.  Go to [Sanity Manage](https://sanity.io/manage).
2.  Select your project -> **API** -> **CORS Origins**.
3.  Click **Add Origin**.
4.  Paste your new Vercel URL.
5.  Allow credentials: **Yes**.

### Troubleshooting
- **Images broken / Content missing?**
    - Check if you added the environment variables correctly.
    - Check if you added content in the Studio.
    - Check the CORS settings in Sanity.
- **Build Failed?**
    - View the logs in Vercel. Since we set pages to `force-dynamic`, it should be robust, but check for any type errors.
