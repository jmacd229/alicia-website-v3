export default '*[_type == "faqs"][0]{title, questions[]{answer,question}}';

export type FAQ = {
  title: string;
  questions: {question: string, answer: string}[];
};
