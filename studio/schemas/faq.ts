export default {
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      title: "Question",
      name: "question",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Answer",
      name: "answer",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
