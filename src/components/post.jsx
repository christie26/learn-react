import classes from "./Post.module.css";

function Post(props) {
  return (
    <>
      <div className={classes.post}>
        <p className={classes.author}>{props.user}</p>
        <p className={classes.text}>{props.id}</p>
      </div>
    </>
  );
}

export default Post;
