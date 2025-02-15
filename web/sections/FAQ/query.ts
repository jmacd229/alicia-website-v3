export default '*[_type == "faqs"][0]{title, questions[]{answer,question,"id":_key}}';

export type FAQ = {
  title: string;
  questions: { id: string; question: string; answer: string }[];
};
