import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    name: null,
    photo: null,
    returnedImage: [],
  };

  handleChange = (e) => {
    if (e.target.files) {
      this.setState({
        [e.target.name]: e.target.files[0],
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, photo } = this.state;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    console.log(photo);

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          returnedImage: data.photo,
        });
      });
  };

  render() {
    console.log(this.state.returnedImage);
    return (
      <>
        {this.state.returnedImage.map((img) => (
          <img src={`http://localhost:3000/${img}`} alt="photo" />
        ))}

        <h1>{this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleChange} />
          <input type="file" name="photo" onChange={this.handleChange} />

          <input type="submit" />
        </form>
      </>
    );
  }
}

export default App;
