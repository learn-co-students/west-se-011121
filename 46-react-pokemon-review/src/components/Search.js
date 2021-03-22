import React from 'react'

// XXX Allow users to search a pokemon by its name in order to narrow down the cards shown on the page

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
