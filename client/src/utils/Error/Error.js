const Error = (props) => {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Fail to Add</h4>
        <p>
          {props.content}
        </p>
      </div>
    );
  };
  export default Error;