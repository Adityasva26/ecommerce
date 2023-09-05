function Alert() {
    return ( 
        <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
        <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing primary alert—check it out!
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
     );
}

export default Alert;