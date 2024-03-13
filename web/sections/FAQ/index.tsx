import React from "react";
import {
  FAQContainer,
  QuestionsContainer,
  FAQTitle,
  Question,
  Answer,
  QandA,
  MaxWidthContainer
} from "./style";
import { FAQ as FAQModel } from "./query";

const FAQ = ({ faqs }: { faqs: FAQModel }) => faqs ? (
  <FAQContainer>
    <MaxWidthContainer>
    <FAQTitle>{faqs.title}</FAQTitle>
    <QuestionsContainer>
      {faqs.questions.map(({ question, answer, id }) => (
        <QandA key={id}>
          <Question>{question}</Question>
          <Answer>{answer}</Answer>
        </QandA>
      ))}
    </QuestionsContainer>
    </MaxWidthContainer>
  </FAQContainer>
) : null;

export default FAQ;
