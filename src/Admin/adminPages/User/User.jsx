import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync , createPostAsync} from '../../../redux/postSlice';
import SideBar from "../../adminComponent/sideBar";
import Header from "../../adminComponent/Header";
import { Link } from 'react-router-dom';

function Userlist() {
    const dispatch = useDispatch();
  const posts = useSelector((state) => state?.posts?.data);
  const loading = useSelector((state) => state?.posts?.loading);
  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);
    return ( <>
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <SideBar/>
      <div className="content">
         <Header/>
         <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">User List</h6>
                        <Link to="/AddUpdateUser" className="btn btn-info m-2">Show All</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts?.data?.map((item)=><tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.status}</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>)}
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         </div>
         </div>
    </> );
}

export default Userlist;