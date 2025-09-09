import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../api/mockApi";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be 6+ characters").required("Password is required")
});

function FormikForm() {
  return (
    <div>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting, setErrors }) => {
          console.log("Formik submission:", values);

          try {
            const result = await registerUser(values);
            console.log("Registration successful:", result);
            alert(`User ${values.username} registered successfully!`);
            resetForm();
          } catch (err) {
            setErrors({ submit: err.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <div>
            <label>Username: </label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password: </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <ErrorMessage name="submit" component="div" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
