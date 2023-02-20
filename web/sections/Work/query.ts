import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { WeekDayKey } from "constants/weekdays";

export default '*[_type == "work"][0]{title, body, image{alt,asset}, virtualVisible, virtualLink{text,url}, bookLink[]{url, location->{"id": _id, title, days, daysVirtual}}}';

export type Work = {
  title: string;
  body: any;
  bookLink: { url: string; location: Location }[];
  virtualVisible: boolean;
  virtualLink: { text: string; url: string };
  image: { alt: string; asset: SanityImageSource };
};

export type Location = {
  id: string;
  title: string;
  days: WeekDayKey[];
  daysVirtual: WeekDayKey[];
};
