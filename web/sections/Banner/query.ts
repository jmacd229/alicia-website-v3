import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export default '*[_type == "banner"][0]{title,subtitle,body,"backgroundType":bg_type,image{alt,asset},video}';

export type Banner = {
  backgroundType: "image" | "video";
  title: string;
  subtitle: string;
  url: string;
  body: any;
  image: {alt: string, asset: SanityImageSource};
  video: any // TODO: implement video background
};
