import styled from "styled-components";
import { fontSize, fontStyle } from "styles/font";
import media from "styles/media";
import colors from "styles/palette";
import spacing from "styles/spacing";

const ERROR_COLOR = "#A30000";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.grey.a};
  padding: ${spacing(8)} ${spacing(4)};

  ${media.medium} {
    padding: ${spacing(4)} ${spacing(8)};
  }
`;

export const FormTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  ${fontStyle.IMPACT};
  color: ${colors.grey.c};
  font-size: ${fontSize("xl")};
  margin-bottom: ${spacing(3)};
  letter-spacing: -2px;
  svg {
    fill: ${colors.blue.c};
  }

  ${media.medium} {
    gap: ${spacing(2)};
    letter-spacing: normal;
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
  font-size: ${fontSize("sm")};
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
