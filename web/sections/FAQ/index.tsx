import React from "react";
import { FAQContainer, QuestionsContainer, FAQTitle, Question, Answer, QandA } from "./style";
import { FAQ as FAQModel } from "./query";

const FAQ = ({ faqs }: { faqs: FAQModel }) => {
  console.log(faqs);
  return (
    <FAQContainer>
      <FAQTitle>{faqs.title}</FAQTitle>
      <QuestionsContainer>
        {faqs.questions.map(({question, answer}) => (
          <QandA>
          <Question>
            {question}
          </Question>
          <Answer>{answer}</Answer>
          </QandA>
        ))}
      </QuestionsContainer>
    </FAQContainer>
  );
};

export default FAQ;
