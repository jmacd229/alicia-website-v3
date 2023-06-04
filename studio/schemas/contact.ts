export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fieldsets: [{ name: "form", title: "Contact Form" }],
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
      type: "mixed_font_text",
    },
    {
      name: "link",
      title: "Link Name",
      type: "string",
    },
    {
      name: "formTitle",
      title: "Form Title",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        },
      ],
      fieldset: "form",
    },
    {
      name: "formButton",
      title: "Form Button",
      type: "string",
      fieldset: "form",
    },
    {
      name: "formSuccessTitle",
      title: "Success Title",
      type: "string",
      fieldset: "form",
    },
    {
      name: "formSuccess",
      title: "Success Message",
      type: "string",
      fieldset: "form",
    },
    {
      name: "methods",
      title: "Contact Methods",
      type: "array",
      of: [
        {
          type: "contact_method",
        },
      ],
    },
    {
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        {
          name: "location",
          title: "Location",
          type: "reference",
          to: [{ type: "location" }],
        },
      ],
    },
  ],
};
