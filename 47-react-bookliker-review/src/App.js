import React from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image,
} from "semantic-ui-react";
import BookContainer from "./container/BookContainer";

const API = `http://localhost:3000/books`;
const defaultUser = { id: 1, username: "pouros" };

class App extends React.Component {
  state = {
    books: [],
    selectedBook: {},
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((books) => {
        this.setState({
          books: books,
        });
      });
  }

  captureBook = (bookId) => {
    this.setState({
      selectedBook: this.state.books.find((book) => book.id === bookId),
    });
  };

  patchLike(book) {
    // .some is for looking at specific valules within an array
    if(book.users.some(user => user.id === defaultUser.id)) {
      console.log('like a different book')
    } else {
      fetch(API + `/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify({
          users: [...book.users, defaultUser]
        })
      })
      .then(res => res.json())
      .then(book => {
        this.setState({
          selectedBook: book
        })
      })
    }
  }

  renderDefault() {
    return (
      <>
        <Header>Book title</Header>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <p>Book description</p>
        <Button
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: "red",
            pointing: "left",
            content: "2,048",
          }}
        />
        <Header>Liked by</Header>
        <List>
          <List.Item icon="user" content="User name" />
        </List>
      </>
    );
  }

  renderSelected() {
    const {title, description, img_url, users} = this.state.selectedBook;
    console.log(title)
    return (
      <>
        <Header>{title}</Header>
        <Image src={img_url} size="small" />
        <p>{description}</p>
        <Button
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: "red",
            pointing: "left",
            content: users.length,
          }}
          onClick={() => this.patchLike(this.state.selectedBook)}
        />
        <Header>Liked by</Header>
        <List>
          {users.map(user => {
            return (
              <List.Item icon="user" key={user.id} content={user.username} />
            )
          })}
        </List>
      </>
    );
  }

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
            <BookContainer
              books={this.state.books}
              captureBook={this.captureBook}
            />
          </Menu>
          <Container text>
            {this.state.selectedBook.title
              ? this.renderSelected()
              : this.renderDefault()}
          </Container>
        </main>
      </div>
    );
  }
}

export default App;

// conditionally render book card

// click action on book title to render card

// display list of users who liked the book
