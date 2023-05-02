import Icon from "components/Icon";
import { Field, FieldError, Form, FormContainer, FormTitle } from "./style";
import { useForm as useFormSpree } from "@formspree/react";
import BaseButton from "components/Button";
import { useForm } from "react-hook-form";
import submit from "animations/submit.json";
import { FC } from "react";
import { ContactFormData } from "sections/Contact/query";

const ContactForm:FC<{form: ContactFormData}> = ({form}) => {
  const [state, onSubmit] = useFormSpree("xlekzdyg");
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<{ email: string; message: string; name: string }>({
    reValidateMode: "onSubmit",
  });
  return (
    <FormContainer>
      <FormTitle>
        <Icon icon={state.succeeded ? "sent" : "message"} size={64} alt="" />
        {state.succeeded ? form.formSuccessTitle : form.formTitle}
      </FormTitle>
      {state.succeeded ? (
        <p>
          {form.formSuccess}
        </p>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            Name
            <input
              aria-invalid={Boolean(errors.name)}
              aria-aria-describedby={Boolean(errors.name) ? "name-error" : null}
              {...register("name", {
                onChange: () => clearErrors("name"),
                required: true,
              })}
            />
            {errors.name && (
              <FieldError id="name-error">Please enter a name.</FieldError>
            )}
          </Field>
          <Field>
            Email
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
            {form.formButton}
          </BaseButton>
        </Form>
      )}
    </FormContainer>
  );
};

export default ContactForm;
