export default {
  name: "aboutMe",
  title: "About Me",
  type: "document",
  __experimental_actions: ['update', 'publish'], 
  fields: [
    {
      title: "Visible",
      name: "visible",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "mixed_font_text",
    },
    {
      name: "link",
      title: "Link Name",
      type: "string",
    },
    {
      name: "body",
      title: "Body text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      title: "image",
      type: "alt_image",
    },
  ],
};
