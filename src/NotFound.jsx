import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    console.log("dfasdfasd")
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center">404 - Page Not Found</h2>
          <p className="text-center">The page you are looking for does not exist.</p>
          <div className="text-center">
            <Link to="/" className="btn btn-primary">Go Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;