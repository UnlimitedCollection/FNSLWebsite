# FNSL Content Management Manual

This guide explains how to use the embedded Sanity Studio to manage content for the Fairtrade NAPP–Sri Lanka website.

## Accessing the Studio

1.  **Locally**: Start your server (`npm run dev`) and go to `http://localhost:3000/studio`.
2.  **Production**: Go to `https://your-website.com/studio` (once deployed).

You will need to log in with your Sanity credentials (or the account added to the project).

## Content Types

### 1. Products
Used for the Product Catalog page.
- **Name**: Title of the product (e.g., "Organic Black Tea").
- **Slug**: Click "Generate" to create a URL-friendly ID.
- **Main Image**: The primary photo shown on listings.
- **Categories**: Select applicable categories (create new ones first if needed).
- **Description**: Detailed product story and information.
- **Certifications**: List of fairtrade/organic certifications.

### 2. Producers
Used for the Producer Directory and Profile pages.
- **Name**: Name of the cooperative or organization.
- **Slug**: "Generate" for URL.
- **Main Image**: Logo or representative photo.
- **Location**: City or District.
- **Product Categories**: What they produce (links to Categories).
- **Description**: The "About" story of the producer.
- **Impact Metrics**: Key stats like "Families Supported", "Years Fairtrade", etc.

### 3. News
Used for the News & Updates page.
- **Title**: Headline.
- **Slug**: URL identifier.
- **Published At**: Date of publication (controls sorting).
- **Type**: Select `News`, `Event`, or `Press Release`.
- **Main Image**: Banner image.
- **Body**: Rich text content.

### 4. Programs
Used for the "Our Work" section.
- **Title**: Name of the project/program.
- **Overview**: Short summary.
- **Theme**: E.g., "Climate Change", "Gender Equality".
- **Impact Metrics**: quantifiable results (e.g., "500 Farmers Trained").

## Publishing Workflow

1.  **Draft**: Changes are saved automatically as you type but are not visible on the website.
2.  **Publish**: Click the green **Publish** button at the bottom right to push changes live.
3.  **Unpublish**: To remove content, click the arrow next to Publish and select **Unpublish**.

## Tips
- **Images**: Use the built-in image cropper ("Hotspot") to ensure faces/products are centered in thumbnails.
- **Previews**: You can keep the website open in another tab to see changes after publishing (refresh may be required).
