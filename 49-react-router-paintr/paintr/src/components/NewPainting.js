import React from "react";
import {withRouter} from 'react-router-dom'

class NewPainting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      birthday: '',
      deathday: ''
    };
  }

  onSave = e => {
    e.preventDefault();
    let info = {
      title: this.state.title,
      name: this.state.name,
      birthday: this.state.birthday,
      deathday: this.state.deathday
    };
    this.props.updatePaintingInfo(this.props.painting.id, info);
  };

  render() {
    console.log('location: ', this.props.location)
    return (
      <div className="ui centered card">
        {/* <div>
          <img
            alt={this.props.painting.title}
            src={this.props.painting.image}
          />
        </div> */}
        <form className="ui form" onSubmit={this.onSave}>
          <input
            className="ui field"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            className="ui field"
            name="artists-name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            className="ui field"
            name="birthday"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
          <input
            className="ui field"
            name="deathday"
            value={this.state.deathday}
            onChange={e => this.setState({ deathday: e.target.value })}
          />
          <button
            className="ui button"
            type="button"
            onClick={this.props.cancel}
          >
            Cancel
          </button>
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPainting);
