import styled from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import { shadow } from "styles/shadows";
import spacing from "styles/spacing";

const ERROR_COLOR = "#A30000";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.grey.a};
  padding: ${spacing(4)};
  border-top: 1px solid ${colors.grey.b};
  border-right: 1px solid ${colors.grey.b};
  border-top-right-radius: 8px;
  ${shadow(1)}

  ${media.medium} {
    padding: ${spacing(4)} ${spacing(8)};
  }
`;

export const FormTitle = styled.h3`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 75rem;

  ${fontStyle.IMPACT};
  color: ${colors.grey.c};
  > p {
    font-size: ${fontSize("lg")};
    margin: 0;
    > a {
      ${fontStyle.CURSIVE};
      text-decoration: none;
      border-bottom: 1px solid ${colors.jade.b};
      color: ${colors.jade.b};
    }
  }
  margin-bottom: ${spacing(3)};
  svg {
    fill: ${colors.blue.b};
    max-width: 48px;
  }

  ${media.medium} {
    gap: ${spacing(2)};
    flex-direction: row;
    text-align: left;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 75rem;
  gap: ${spacing(2)};
  button {
    margin-top: ${spacing(2)};
    align-self: center;
    width: 40%;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${fontSize("xs")};
  color: ${colors.grey.c};
  gap: 2px;
  > input,
  textarea {
    ${fontStyle.IMPACT};
    padding: ${spacing(1)};
    border-radius: ${spacing(1)};
    resize: none;
    border: 1px solid ${colors.grey.b};
    &[aria-invalid="true"] {
      border-color: ${ERROR_COLOR};
    }
  }
`;

export const FieldError = styled.span`
  font-size: ${fontSize("sm")};
  color: ${ERROR_COLOR};
`;
