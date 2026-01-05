# FNSL Website

Official website for Fairtrade NAPP–Sri Lanka (FNSL), built with Next.js, Tailwind CSS, and Sanity.io.

## Features

- **Modern Stack**: Next.js 15 (App Router), React 19, Tailwind v4.
- **Dynamic Content**: Integrated with Sanity.io for easy content management.
- **Responsive Design**: Mobile-first, accessible UI.
- **Key Modules**:
  - **Products Catalog**: Filterable list of certified Sri Lankan products.
  - **Producer Directory**: Database of smallholder farmer organizations with profiles.
  - **News & Events**: Latest updates and upcoming programs.
  - **Impact Programs**: Showcasing development initiatives.

## Getting Started

### 1. Prerequisites

- Node.js 18+ installed.
- A Sanity.io account (free).

### 2. Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/UnlimitedCollection/FNSLWebsite.git
    cd fnsl-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

> **Note**: To get these credentials, create a project at [https://sanity.io/manage](https://sanity.io/manage).

### 4. Running Locally

Start the development server:

```bash
npm run dev
```

- **Website**: `http://localhost:3000`
- **CMS Studio**: `http://localhost:3000/studio`

## Managing Content

Visit `/studio` locally or on your deployed site to access the CMS.
See [CMS_MANUAL.md](./CMS_MANUAL.md) for a detailed guide on adding products, producers, and news.

## Deployment

### Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Add the `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` environment variables in the Vercel dashboard.
4.  Deploy.

### Sanity CORS

Ensure your deployed domain (e.g., `https://your-site.vercel.app`) is added to the **CORS Origins** list in your Sanity project settings:
`API > CORS Origins > Add Origin`.

## Project Structure

- `src/app`: Next.js App Router pages.
- `src/components`: Reusable UI components.
- `src/sanity`: Sanity configuration, schemas, and queries.
- `public`: Static assets (images, fonts).
