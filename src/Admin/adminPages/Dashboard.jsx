import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync, createPostAsync } from '../../redux/postSlice';
import SideBar from '../adminComponent/sideBar';
import Header from '../adminComponent/Header';

function Dashboard() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state?.posts?.data);
    const loading = useSelector((state) => state?.posts?.loading);
    if (loading) {
        return <p>Loading...</p>;
    }

    return (

        <div className="container-xxl position-relative bg-white d-flex p-0">

            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

            <SideBar />

            <div className="content">

                <Header />

                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                
                                <i class="fa-solid fa-user fa-3x text-primary"></i>
                                <div className="ms-3">
                                    <p className="mb-2">User</p>
                                    <h6 className="mb-0">{posts?.data?.length}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>

    );
}

export default Dashboard
