export default {
  name: "active_pop_up",
  title: "Active Pop Up",
  type: "document",
  __experimental_actions: ['update', 'publish'], 
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true
    },
    {
      title: "Pop Up",
      name: "pop_up",
      type: "reference",
      to: [{ type: "pop_up" }],
    },
  ],
};

export const pop_up = {
  name: "pop_up",
  title: "Pop Up",
  type: "document",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
};
