import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { createAccount } from "./service";

// VALIDATION
const CreateAccountSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function CreateAccountPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleCreateAccount = async (values) => {
    setError(false);
    setLoading(true);
    const { username, password } = values;

    try {
      await createAccount({
        username,
        password,
      });
      alert("Usuário criado com sucesso!");
      window.location.href = "/login";
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={CreateAccountSchema}
        onSubmit={(values) => {
          handleCreateAccount(values);
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Field name="username" placeholder="Username" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <br />
            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            <Field
              name="passwordConfirmation"
              placeholder="Password confirm"
              type="password"
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <div>{errors.passwordConfirmation}</div>
            ) : null}
            <br />
            <button type="submit" disabled={!isValid}>
              {loading ? "carregando..." : "Criar"}
            </button>
            <br />
            {error && <p style={{ color: "red" }}> Erro ao criar conta </p>}
          </Form>
        )}
      </Formik>

      <button
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Login
      </button>
    </>
  );
}

export { CreateAccountPage };
