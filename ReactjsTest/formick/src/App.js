import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

//import "./styles.css";

const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div className="App">
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
        <br />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="password" />
        <br />

        <label>
          <Field
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
          />
          join our newsletter
        </label>
        <br />
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premimum</option>
        </Field>
        <br />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </Form>
  );
};
const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "aniketuttam@gmail.com") {
        setErrors({ email: "that email is already taken" });
      } else {
        resetForm();
      }
    }, 2000);
  }
})(App);

render(<FormikApp />, document.getElementById("root"));
