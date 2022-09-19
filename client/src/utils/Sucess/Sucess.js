const Sucess = (props) => {
  return (
    <div className="alert alert-success w/10 h-10" role="alert">
      <h4 className="alert-heading">{props.content}</h4>
    </div>
  );
};
export default Sucess;
