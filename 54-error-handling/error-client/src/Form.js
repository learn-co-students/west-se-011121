import { useState } from "react";
const Form = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form onSubmit={(e) => createPost(e, { title })}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
