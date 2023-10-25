import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
  const [newUser, setUser] = useState("");
  const [newBody, setBody] = useState("");

  function userChangeHandler(event) {
    setUser(event.target.value);
  }
  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }
  return (
    <>
      <ui>
        <NewPost
          onUserChange={userChangeHandler}
          onBodyChange={bodyChangeHandler}
        />
        <Post user="etienne" id="he is sleeping now" />
        <Post user="yoonseo" id="she is working now" />
        <Post user={newUser} id={newBody} />
      </ui>
    </>
  );
}

export default PostsList;
