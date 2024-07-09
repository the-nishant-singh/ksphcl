import React from "react";
import classes from "./Login.module.css";
import { Field, Form, Formik } from "formik";
function ForgotPassword({ handleForgotPassword }) {
  return (
    <div className={classes.forgotPassword}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(val) => handleForgotPassword(val)}
      >
        {({ errors, touched, values, isValidating, ...props }) => (
          <Form>
            <div className={classes.Form}>
              <div>Forgot Password</div>
              <div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <button className="btn-primary" style={{ fontSize: "0.8vw" }}>
                Submit
              </button>
            </div>
            <div
              className={classes.FooterText}
              style={{ textAlign: "center", textTransform: "none" }}
            >
              *The passsword reset request might take upto 24 hours to be
              resolved.
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgotPassword;
