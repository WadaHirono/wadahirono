import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

// ✅ any → unknown に変更
export function urlFor(source: unknown) {
  return builder.image(source);
}