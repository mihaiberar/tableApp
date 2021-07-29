import React, { useState } from 'react'
import './tableRow.css'
import Highlight from 'react-highlighter'
import { Link } from 'react-router-dom'

function TableRow(props) {
  const [color, setColor] = useState(false)

  function handleInputCheck() {
    props.onCheck(props.id)
  }

  function mouseOver() {
    setColor(true)
  }

  function mouseOut() {
    setColor(false)
  }

  return (
    <div
      style={{
        backgroundColor: props.checked || color ? 'rgb(158, 183, 228)' : 'rgb(114, 155, 156)'
      }}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      className="tableRow"
    >
      <div className="tableCell">
        <input
          onClick={handleInputCheck}
          readOnly={true}
          checked={props.checked || false}
          className="inputCheckBox"
          type="checkbox"
        ></input>
      </div>
      <div className="tableCell">
        <Link to={'/edit/' + props.id} style={{ color: 'black', textDecoration: 'none' }}>
          <p>Edit</p>
        </Link>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.createdAt}</Highlight>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.id}</Highlight>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.name}</Highlight>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.owner}</Highlight>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.updatedAt}</Highlight>
      </div>
      <div className="tableCell">
        <Highlight search={props.input}>{props.url}</Highlight>
      </div>
    </div>
  )
}

export { TableRow }
