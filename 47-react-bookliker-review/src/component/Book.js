import React from 'react'
import { Menu } from 'semantic-ui-react'

const Book = (props) => {
  return (
    <Menu.Item as={'a'} onClick={() => props.captureBook(props.book.id)}>{props.book.title}</Menu.Item>
  )
}

export default Book