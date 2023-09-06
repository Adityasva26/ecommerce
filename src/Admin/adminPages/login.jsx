
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import {loginpostasync} from '../../redux/loginslice';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state?.posts?.data);
    const loading = useSelector((state) => state?.posts?.loading);
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });
    const handleSubmit = (values) => {
         console.log("values,",values)
        // if (values) {
            dispatch(loginpostasync(values)).then((result) => {
                 if (result?.payload?.message == "Success") {
                    navigate(`/Admin`)
                }
            });
        // }

    };
    return (<div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="index.html" className="">
                            <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>ADMIN</h3>
                        </a>
                        <h3>Sign In</h3>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => (<Form>
                            <div className="form-floating mb-3">
                                <Field type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className="form-floating mb-4">
                                <Field type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            {/* <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <a href="">Forgot Password</a>
                            </div> */}
                            <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                            {/* <p className="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p> */}
                        </Form>)}</Formik>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;