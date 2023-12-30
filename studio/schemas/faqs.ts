export default {
    name: "faqs",
    title: "FAQs",
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
        type: "string",
      },
      {
        name: "link",
        title: "Link Name",
        type: "string",
      },
      {
        title: "Questions",
        name: "questions",
        type: "array",
        of: [{type: "faq"},
        ],
      },
    ],
  };
  