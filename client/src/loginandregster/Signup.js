import classes from "./signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
  const [error,setError] = useState(""); 
  return (
    <Formik
      initialValues={{
        username:"",
        email: "",
        password: "",
      }}
      validationSchema={() => {
        return Yup.object().shape({
          username: Yup.string().required('username is required'),
          email: Yup.string()
            .required("Email is required")
            .email("email is invalid"),

          password: Yup.string().required("Password is required"),
          confirmpassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        });
      }}
      onSubmit={ async({username,email,password}, { resetForm }) => {
        const result = await fetch("/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          })
        });
        const res= await result.json();
        if (res.status === "ok" ) {
          navigate('/login');
				} else {
          setError(res.error);
				}
        resetForm();
      }
      }
    >
      {(formik) => (
      <div className={classes.card}>
        <div className={classes.toprow}>
          <h1>New to FitCulture</h1>
          <p>Sign up</p>
        </div>
        <Form>
        <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
        <div className={classes.carddetails}>
          <Field name="username" type="text" placeholder="Enter your name" />
        </div>
        <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
        <div className={classes.carddetails}>
          <Field name="email" type="email" placeholder="Enter your email" />
        </div>
        <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
        <div className={classes.carddetails}>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <i className="fa fa-lock"></i>
          <span>
            <small className="fa fa-eye-slash passcode"></small>
          </span>
        </div>
        <ErrorMessage
              name="confirmpassword"
              component="div"
              className="text-danger"
            />
        <div className={classes.carddetails}>
          <Field
            name="confirmpassword"
            type="password"
            id="password-confirm"
            placeholder="Enter your password again"
          />
          <i className="fa fa-lock"></i>
          <span>
            <small className="fa fa-eye-slash passcode"></small>
          </span>
        </div>
        

        <button className={classes.signin}>Sign Up</button>
        </Form>
        <p className={classes.signup}>
          Have an account?
          <NavLink to="/login" className={classes.link}>
            Login
          </NavLink>
        </p>
        {<div className="text-danger" >{error}</div>}
      </div>
      )}
    </Formik>
  );
};

export default Signup;
