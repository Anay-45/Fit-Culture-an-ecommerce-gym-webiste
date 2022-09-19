import classes from "./Loader.module.css";
const Loading = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="absolute w-1/8 text-center top-50 left-50">
        <div className={classes.ldshourglass}></div>
        <div>Loading</div>
        <div>{props.text}</div>
      </div>
      </div>
  );
};

export default Loading;
