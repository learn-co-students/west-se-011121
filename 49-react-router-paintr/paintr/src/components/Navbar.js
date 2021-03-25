import React from "react";

const Navbar = props => (
  <div className={`ui inverted ${props.color} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </a>
    <div className="right menu">
      <div className="item">index</div>
      <div className="item">new</div>
    </div>
  </div>
);

export default Navbar;
