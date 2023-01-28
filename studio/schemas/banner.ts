export default {
  name: "banner",
  title: "Banner",
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
      name: "subtitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "body",
      title: "Body text",
      type: "array",
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      title: 'Background Type',
      name: 'bg_type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'}
        ],
        layout: 'radio'
      }
    },
    {
      title: "Image",
      name: "image",
      type: "alt_image",
      readOnly: ({document}) => document?.bg_type === 'video',
    },
    {
      title: "Video",
      name: "video",
      type: "mux.video",
      readOnly: ({document}) => document?.bg_type === 'image',
    },
  ],
};
