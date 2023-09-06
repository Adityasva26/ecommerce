import Header from "../../adminComponent/Header";
import SideBar from "../../adminComponent/sideBar";
import { useSelector, useDispatch} from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { createPostAsync ,updatepostAsync } from '../../../redux/postSlice';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

function AddUpdateUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const posts = useSelector((state) => state?.posts?.data);
    const loading = useSelector((state) => state?.posts?.loading);
    
    const initialValues = {
        full_name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        full_name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const handleSubmit = (values) => {
       if(param.service=='Update'){
        dispatch(updatepostAsync(values)) .then((result) => {
            if (result.payload.message=="success") {
                navigate(`/Admin/User`)
            }
        });
       }
       else{
        if (values) {
            dispatch(createPostAsync(values)).then((result) => {
                if (result.payload.message=="success") {
                    navigate(`/User`)
                }
            });
        }
    }
    };

    const foundUser = findUserById(posts.data, param.id);

    function findUserById(usersArray, idToFind) {
        if(usersArray){
        return usersArray.find((user) => user.id === idToFind)}
    }

    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <SideBar />
                <div className="content">
                    <Header />
                    <div className="container-fluid pt-4 px-4">
                        <div className="row bg-light  rounded p-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bg-light rounded h-100 p-4">
                                    <h6 className="mb-4"> {param.service=='Update'?"Update":"Add"} User</h6>
                                    <Formik
                                        initialValues={foundUser || initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {(formik) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="full_nameid" className="form-label">Name</label>
                                                            <Field type="text" className="form-control" id="full_nameid" name="full_name" />
                                                            <ErrorMessage name="full_name" component="div" className="error" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                            <Field type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                            <ErrorMessage name="email" component="div" className="error" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                            <Field type="password" name="password" className="form-control" id="exampleInputPassword1" />
                                                            <ErrorMessage name="password" component="div" className="error" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">{param.service=='Update'?"Update":"Add"}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddUpdateUser;
