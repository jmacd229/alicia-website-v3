import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { MixedFontTitle } from 'types/title';

export default '*[_type == "aboutMe"][0]{title, body, image{alt,asset}}';

export type About = {
  title: MixedFontTitle;
  body: any;
  image: {alt: string, asset: SanityImageSource};
};
