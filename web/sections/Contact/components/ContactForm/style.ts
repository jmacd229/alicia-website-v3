import styled from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

const ERROR_COLOR = '#A30000';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.grey.a};
  padding: ${spacing(8)} ${spacing(4)};
  
  ${media.medium} {
    padding: ${spacing(4)}  ${spacing(8)};
  }
`;

export const FormTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  ${fontStyle.IMPACT_THIN};
  font-size: ${fontSize("xl")};
  margin-bottom: ${spacing(4)};
  svg {
    fill: ${colors.blue.c};
  }

  ${media.medium} {
    gap: ${spacing(2)};
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 75rem;
  gap: ${spacing(2)};
  button {
    align-self: center;
    width: 40%;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(0.5)};
  > input,
  textarea {
    padding: ${spacing(1)};
    border-radius: ${spacing(1)};
    resize: none;
    border: 1px solid ${colors.grey.b};
    ${fontStyle.IMPACT_THIN};
    &[aria-invalid="true"]{
      border-color:${ERROR_COLOR};
    }
  }
`;

export const FieldError = styled.span`
  font-size: ${fontSize("sm")};
  color: ${ERROR_COLOR};
`;
