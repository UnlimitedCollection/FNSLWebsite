import { groq } from "next-sanity";

// Products
export const productsQuery = groq`*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  shortDescription,
  certifications
}`;

export const productQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  shortDescription,
  body,
  certifications,
  specifications,
  "relatedProducers": *[_type == "producer" && references(^._id)] {
    _id,
    name,
    "slug": slug.current,
    "image": mainImage.asset->url,
    "location": location
  }
}`;

// Producers
export const producersQuery = groq`*[_type == "producer"] {
  _id,
  name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  location,
  producerType,
  "productCount": count(products)
}`;

export const producerQuery = groq`*[_type == "producer" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  location,
  producerType,
  body,
  quickFacts,
  "products": products[]->{
    _id,
    name,
    "slug": slug.current,
    "image": mainImage.asset->url,
    shortDescription
  }
}`;

// News
export const newsQuery = groq`*[_type == "news"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  type,
  publishedAt,
  "mainImage": mainImage.asset->url,
  excerpt,
  eventDate,
  location
}`;

// Programs
export const programsQuery = groq`*[_type == "program"] {
  _id,
  title,
  "slug": slug.current,
  theme,
  "mainImage": mainImage.asset->url,
  overview,
  impactMetrics
}`;
