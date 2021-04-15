import { Component } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Form";

const API = "http://localhost:3000";

class App extends Component {
  state = {
    error: null,
    post: {},
  };
  componentDidMount() {}

  createPost = (e, post) => {
    e.preventDefault();
    console.log(post);
    axios
      .post(API + "/posts", { post })
      .then((resp) => {
        console.log(resp.data);
        this.setState({ post: resp.data, error: null });
      })
      .catch((error) =>
        this.setState({ error: error.response.data.errors[0] })
      );
    //need to make request to create post
  };

  render() {
    const { error, post } = this.state;
    return (
      <div className="App">
        {error && <p className="error">{error}</p>}
        <h1>{post.title}</h1>
        <Form createPost={this.createPost} />
      </div>
    );
  }
}

export default App;
