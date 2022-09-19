import { useNavigate, NavLink } from "react-router-dom";
import classes from "./login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { webtokenactions } from "../store/webtoken";
import * as Yup from "yup";
import { useState } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error,setError] = useState("") 
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={() => {
        return Yup.object().shape({
          email: Yup.string()
            .required("Email is required")
            .email("email is invalid"),
          password: Yup.string().required("Password is required"),
        });
      }}
      onSubmit={ async({email,password}, {resetForm,setErrors}) => {
        const result = await fetch("/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          })
        });
        const res= await result.json();
        if (res.status === "ok" ) {
					
          const token = res.data;
          dispatch(webtokenactions.login({ token}));
          navigate('/home');
				} else {
          setError(res.error)
				}
        resetForm();
      }}
    >
      {(formik) => (
        <div className={classes.card}>
          <div className={classes.toprow}>
            <h1>Hello users</h1>
            <p>Log in with your email and password</p>
          </div>
          <Form>
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
            <div className={classes.carddetails}>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <br />

              <i className="fa fa-envelope"></i>
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
                className="form-control"
                placeholder="Enter your password"
              />
              <i className="fa fa-lock"></i>
              <span>
                <small className="fa fa-eye-slash passcode"></small>
              </span>
            </div>
            
            <button type="submit" className={classes.signin}>
              Sign in
            </button>
          </Form>

          <p className={classes.signup}>
            Dont't have an account?
            <NavLink to="/Signup" className={classes.link}>
              {" "}
              Sign up
            </NavLink>
            
          </p>
          {<div className="text-danger" >{error}</div>}
        </div>
      )}
    </Formik>
  );
};
export default Login;
