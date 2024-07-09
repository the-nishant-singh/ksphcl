import classes from "./Login.module.css";
import React, { useContext, useState } from "react";
import { Field, Form, Formik } from "formik";
import { SET_USER } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import { UserService } from "../../services/userService";
import { toast } from "react-toastify";
import ModalComponent from "../../components/ModalComponent";
import ForgotPassword from "./ForgotPassword";
import { AuthService } from "../../services/authService";
import { useLoader } from "../../hooks/use-loader.hook";
import logo from "../.././assets/arielLogo.png";

const Login = () => {
  const [startLoader, stopLoader] = useLoader();
  const [modalstate, setModalState] = useState(false);
  const { dispatch: authDispatch } = useContext(AuthContext);
  const dispatchSetUser = (payload) =>
    authDispatch({ type: SET_USER, payload });

  const handleLogin = (values) => {
    let payload = { ...values };
    AuthService.Login(
      payload,
      () => startLoader("sendotp"),
      handleLoginSuccess,
      handleLoginError,
      () => stopLoader("sendotp")
    );
  };

  const handleLoginSuccess = ({ data }) => {
    console.log("loginSuccess", data);
    const {
      success,
      data: { token },
      data: { user },
    } = data;
    if (success) {
      if (!["admin", "user"].includes(user?.userRole)) {
        toast.error("Invalid User Role!");
      } else {
        dispatchSetUser({ user, token });
        toast.success("Login Success");
      }
    }
  };

  const handleForgotPassword = (val) => {
    UserService.requestPassword(
      val,
      () => {
        startLoader("request");
      },
      () => {
        toast.success("Password reset request placed!");
        setModalState(false);
      },
      (err) => {
        toast.error("Internal server error!");
      },
      () => {
        stopLoader("request");
      }
    );
  };

  const handleLoginError = (err) => {
    let data = err && err.response ? err.response.data : null;
    if (data) toast.error(data.message);
    else toast.error("Internal server error!");
  };

  return (
    <>
      <ModalComponent
        isOpen={modalstate}
        setOpen={setModalState}
        onClose={() => {
          setModalState(false);
        }}
      >
        <ForgotPassword handleForgotPassword={handleForgotPassword} />
      </ModalComponent>
      <div className={classes.MainContainer}>
        <div className={classes.Container}>
          <div className={classes.Logowrapper}>
            <img src={logo} alt="logo" className={classes.Logo} />
          </div>
          <div className={classes.LoginWrapper}>
            <h2 className={classes.LoginTitle}>Login Please</h2>
            <p className={classes.SubTitle}>
              This is a secure system and you will need to provide your login
              details to access the site.
            </p>
          </div>
          <Formik
            initialValues={{
              email: "nishant.singh@volthertz.com",
              password: "123",
            }}
            onSubmit={(val) => handleLogin(val)}
          >
            {({ errors, touched, values, isValidating, ...props }) => (
              <Form className={classes.LoginForm}>
                <div className={classes.InputContainer}>
                  <label for="email">Email </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className={classes.InputContainer}>
                  <label for="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  className={classes.ButtonFrom}
                  type="submit"
                  value="Log in"
                >
                  Log in
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
