function Alert(props) {
    console.log(props.message)
    return ( 
        <div className={`alert alert-primary alert-dismissible fade show`} role="alert" style={{zIndex:"9999"}}>
        <i className="fa fa-exclamation-circle me-2"></i>{props.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
     );
}

export default Alert;