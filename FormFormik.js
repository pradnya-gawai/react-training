import React from "react";

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormFormik() {
  const user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };
  const schema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    email: Yup.string().required("Please Enter Email"),
    password: Yup.string().required("Please Enter Password"),
    confirmPassword: Yup.string()
      .required("Please Enter Confirm Password")
      .oneOf([Yup.ref("password"), null], "Confirm password doesn't match"),
    terms: Yup.bool().required().oneOf([true], "Please Accept Terms"),
  });
  return (
    <div>
      <h2>Formik Form</h2>
      <Formik
        initialValues={user}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label>Name</label>
            <Field name="name" type="text" className="form-control"></Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="name"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label>Email</label>
            <Field name="email" type="text" className="form-control"></Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="email"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              className="form-control"
            ></Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="password"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className="form-control"
            ></Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="confirmPassword"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label>Accept Terms</label>
            <Field name="terms" type="checkbox"></Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="terms"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
