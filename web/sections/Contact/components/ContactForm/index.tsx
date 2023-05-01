import Icon from "components/Icon";
import { Field, FieldError, Form, FormContainer, FormTitle } from "./style";
import { useForm as useFormSpree } from "@formspree/react";
import BaseButton from "components/Button";
import { useForm } from "react-hook-form";
import submit from "animations/submit.json";

const ContactForm = () => {
  const [state, onSubmit] = useFormSpree("xlekzdyg");
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<{ email: string; message: string }>({
    reValidateMode: "onSubmit",
  });
  return (
    <FormContainer>
      <FormTitle>
        <Icon icon={state.succeeded ? "sent" : "message"} size={64} alt="" />
        {state.succeeded ? "Thank-you!" : "Leave me a message" }
      </FormTitle>
      {state.succeeded ? (
        <p>
          Your message has been recorded. I'll get back to you as soon as
          possible.
        </p>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            Email Address
            <input
              aria-invalid={Boolean(errors.email)}
              aria-aria-describedby={
                Boolean(errors.email) ? "email-error" : null
              }
              {...register("email", {
                onChange: () => clearErrors("email"),
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <FieldError id="email-error">
                Please enter a valid e-mail address.
              </FieldError>
            )}
          </Field>
          <Field>
            Message
            <textarea
              aria-invalid={Boolean(errors.message)}
              aria-aria-describedby={
                Boolean(errors.message) ? "message-error" : null
              }
              {...register("message", {
                onChange: () => clearErrors("message"),
                required: true,
                minLength: 20,
              })}
              rows={9}
            />
            {errors.message && (
              <FieldError id="message-error">
                Please enter a message greater than 20 characters.
              </FieldError>
            )}
          </Field>
          <BaseButton
            variant="secondary"
            size="large"
            type="submit"
            disabled={state.submitting}
            animationConfig={{ name: "submit", data: submit }}
          >
            Submit
          </BaseButton>
        </Form>
      )}
    </FormContainer>
  );
};

export default ContactForm;
