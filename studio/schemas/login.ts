export default {
  name: "login",
  title: "Login Link",
  type: "document",
  __experimental_actions: ["update", "publish"],
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
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tooltip",
      title: "Tooltip",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
