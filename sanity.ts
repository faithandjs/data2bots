import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

const default_image_url = () => {
  return "/Assets/blog3.png";
};

export const sanityClient = createClient(config);
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source?: BlogImage) =>
  source ? builder.image(source) : { url: default_image_url };
