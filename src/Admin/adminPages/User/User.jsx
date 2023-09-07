import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { fetchPostsAsync, deletePostAsync } from '../../../redux/postSlice';
import SideBar from "../../adminComponent/sideBar";
import Header from "../../adminComponent/Header";
import Alert from '../../../_service/alert';

function Userlist() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const posts = useSelector((state) => state?.posts?.data);
    const action = useSelector((state) => state?.posts?.action);
    const login = useSelector((state) => state?.login?.data?.data?.token);
    const loading = useSelector((state) => state?.posts?.loading);

    useEffect(() => {
        dispatch(fetchPostsAsync(login)).then((result) => {
            if (result) {
                console.log(result.payload)
                setFilteredPosts(result.payload.data)
            }
        }).catch((err)=>{
            console.log("err",err)
        })
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
          }, 3000); 
          return () => clearTimeout(timeoutId);
    }, [dispatch]);
    const handleDeleteClick = (id) => {
        // Dispatch an action to delete the post
        dispatch(deletePostAsync(login,id));
    };

    const handleNavigate = (e) => {
        navigate(`/Admin/user/Update/${e}`)
    }
    const handleSearchInputChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter posts based on the search query
        const filtered = posts?.data?.filter((item) =>
            item.full_name.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query)||
            item.status.toLowerCase().includes(query)
        );

        setFilteredPosts(filtered);
    };
    
    return (<>
    {action?.message&&isVisible ? ( <Alert message={action?.message}/>):(<></>)}
        <div className="container-xxl position-relative bg-white d-flex p-0">
      
            <SideBar />
            <div className="content">
                <Header />
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">User List</h6>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={searchQuery}
                                            onChange={handleSearchInputChange}
                                        />
                                    </div>
                                </div>

                                <Link to="/Admin/user/Add" className="btn btn-info m-2">Add+</Link>
                            </div>
                        </div>

                        <div className="table-responsive">

                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">

                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPosts?.map((item, key) => <tr id={key}>

                                        <td>{item.full_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.status}</td>
                                        <td><i onClick={() => handleDeleteClick({ id: item.id })} className="fa-solid fa-trash"></i> <i onClick={() => handleNavigate(item.id)} className="fa-solid fa-pen-to-square"></i></td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </>);
}

export default Userlist;