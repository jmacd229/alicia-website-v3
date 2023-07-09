export default {
  name: "booking",
  title: "Booking",
  type: "object",
  fields: [
    {
      title: "Visible",
      name: "visible",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Booking url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
