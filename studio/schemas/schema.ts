import about_me from "./about_me";
import active_pop_up, { pop_up } from "./active_pop_up";
import alt_image from "./alt_image";
import assets from "./assets";
import banner from "./banner";
import booking from "./booking";
import contact from "./contact";
import contact_method from "./contact_method";
import faq from "./faq";
import faqs from "./faqs";
import font_text from "./font_text";
import link from "./link";
import location from "./location";
import login from "./login";
import mixed_font_text from "./mixed_font_text";
import privacy from "./privacy";
import work from "./work";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  banner,
  alt_image,
  about_me,
  work,
  faqs,
  faq,
  link,
  contact,
  contact_method,
  font_text,
  mixed_font_text,
  privacy,
  location,
  booking,
  assets,
  active_pop_up,
  pop_up,
  login,
];
