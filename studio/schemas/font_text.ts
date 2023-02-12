export default {
	  name: "font_text",
	  type: "document",
	  fields: [
		  {
			title: "Text",
			name: "text",
			type: "string",
			validation: (Rule) => Rule.required(),
		  },
		  {
			title: 'Font Style',
			name: 'fontType',
			type: 'string',
			options: {
			  list: [
				{title: 'Cursive', value: 'cursive'},
				{title: 'Regular', value: 'regular'},
			  ],
			  layout: 'radio'
			},
			validation: (Rule) => Rule.required(),
		  },
		],
	};
  