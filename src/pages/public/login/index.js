import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../../hook/authenticator";

// VALIDATION
const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

// HTML PAGE
function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async (values) => {
    setError(false);
    setLoading(true);
    const { username, password } = values;

    try {
      await signIn({
        username,
        password,
      });
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
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          handleSignIn(values);
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
            <button type="submit" disabled={!isValid}>
              {loading ? "carregando..." : "Entrar"}
            </button>
            <br />
            {error && (
              <p style={{ color: "red" }}> Usuário ou senha invalidas </p>
            )}
          </Form>
        )}
      </Formik>

      <button
        onClick={() => {
          window.location.href = "/criar-conta";
        }}
      >
        Criar uma conta
      </button>
    </>
  );
}

export { LoginPage };
