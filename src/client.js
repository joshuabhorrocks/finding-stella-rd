import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "3za3ltgl",
  dataset: "production",
  useCdn: true,
});