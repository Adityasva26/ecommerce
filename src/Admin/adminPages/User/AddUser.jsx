import Header from "../../adminComponent/Header";
import SideBar from "../../adminComponent/sideBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddUpdateUser() {
    return (<>
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <SideBar />
            <div className="content">
                <Header />
                <div className="container-fluid pt-4 px-4">
                    <div className="row bg-light  rounded p-4">
                        <div class="col-sm-12 col-xl-12">
                            <div class="bg-light rounded h-100 p-4">
                                <h6 class="mb-4">Basic Form</h6>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AddUpdateUser;