import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Location } from "sections/Work/query";
import { MixedFontTitle } from "types/title";

export default '*[_type == "contact"][0]{title,map{alt,asset},methods[]{title,label,url,sanityId,visible},locations[]->{"id": _id,title,label,url},formTitle,formButton,formSuccessTitle,formSuccess}';
export type Contact = {
  title: MixedFontTitle;
  map: { alt: string; asset: SanityImageSource };
  methods: Method[];
  locations: Location[];
} & ContactFormData;

export type ContactFormData = {
  formTitle:string;
  formButton: string;
  formSuccessTitle: string;
  formSuccess: string;
};

export type Method = {
  title: string;
  label: string;
  url: string;
  sanityId: string;
  visible: boolean;
};
