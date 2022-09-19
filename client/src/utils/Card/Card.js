import classes from './Card.module.css';

const Card = (props) =>{

    return(
        <div style={{backgroundImage: `url(${props.url})`}} className={classes.body}>
            
            {props.children}
        </div>
    );
}

export default Card;