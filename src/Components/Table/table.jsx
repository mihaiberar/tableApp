import React, { useState, useEffect } from 'react'
import './table.css'

import { TableRow } from '../TableRow/tableRow.jsx'
import { LoadButton } from '../LoadButton/loadButton.jsx'

function Table(props) {
  const data = props.fetchedData
  // eslint-disable-next-line no-console
  console.log(data)

  const [myData, setMyData] = useState([])

  const [input, setInput] = useState('')

  const [show, setShow] = useState(true)

  const [rowsNumber, setRowsNumber] = useState(0)

  const [status, setStatus] = useState('unchecked')

  useEffect(() => {
    props.fetchData()
    // eslint-disable-next-line no-console
    console.log(props.fetchedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRowsNumber(myData.filter((item) => item.checked).length)
    // eslint-disable-next-line no-console
    console.log(rowsNumber, myData.length)

    // eslint-disable-next-line no-console
    console.log(status)

    let newStatus = 'unchecked'

    if (rowsNumber > 0 && rowsNumber < myData.length) {
      newStatus = 'undeterminate'
    } else if (rowsNumber === myData.length && myData.length !== 0) {
      newStatus = 'checked'
    } else {
      newStatus = 'unchecked'
    }
    setStatus(newStatus)
  }, [myData, rowsNumber, status])

  useEffect(() => {
    setMyData([...data])
  }, [data])

  function handleInput(event) {
    setMyData([
      ...data.filter((row) => {
        if (
          (isNaN(event.target.value) && event.target.value.length > 3) ||
          (!isNaN(event.target.value) && event.target.value.length > 1)
        ) {
          return (
            row.createdAt.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
            row.id.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
            row.name.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
            row.owner.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
            row.updatedAt.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
            row.url.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
          )
        } else {
          return data
        }
      })
    ])
    setInput(event.target.value)
  }

  function clearInput() {
    setInput('')
    setMyData([...data])
  }

  function loadRow(limit) {
    setMyData([
      ...data.filter((rowItem, index) => {
        return index < limit
      })
    ])
  }

  function hideRemoveRowsBtn() {
    setShow(false)
  }

  function showRemoveRowsBtn() {
    setShow(true)
  }

  function handleCheck(id) {
    const newData = myData.map((rowItem) => {
      const checked = rowItem.checked || false
      return { ...rowItem, checked: id === rowItem.id ? !checked : checked }
    })
    setMyData([...newData])
  }

  function handleCheckAll() {
    const nextData = myData.map((item) => {
      return { ...item, checked: status === 'unchecked' ? true : false }
    })
    setMyData([...nextData])
  }

  // eslint-disable-next-line no-console
  console.log(myData)

  return (
    <div>
      <div className="header">
        <input
          autoFocus
          className="searchInput"
          type="text"
          placeholder="Search"
          onChange={handleInput}
          value={input}
        ></input>
        <button
          className="clearBtn"
          onClick={() => {
            clearInput()
            showRemoveRowsBtn()
          }}
        >
          X
        </button>
        <p style={{ color: 'white' }}>
          {rowsNumber === 1 ? `${rowsNumber} row selected` : `${rowsNumber} rows selected`}
        </p>
        <LoadButton
          onLoad={loadRow}
          onShow={showRemoveRowsBtn}
          text={myData.length === 5 ? '5 rows loaded' : 'Load 5 rows'}
          color={myData.length === 5 ? 'rgb(241, 41, 41)' : 'black'}
          rowsNo={5}
        />
        <LoadButton
          onLoad={loadRow}
          onShow={showRemoveRowsBtn}
          text={myData.length === 10 ? '10 rows loaded' : 'Load 10 rows'}
          color={myData.length === 10 ? 'rgb(241, 41, 41)' : 'black'}
          rowsNo={10}
        />
        <LoadButton
          onLoad={loadRow}
          onShow={showRemoveRowsBtn}
          text={myData.length === 20 ? '20 rows loaded' : 'Load 20 rows'}
          color={myData.length === 20 ? 'rgb(241, 41, 41)' : 'black'}
          rowsNo={20}
        />
        <LoadButton
          onLoad={loadRow}
          onShow={showRemoveRowsBtn}
          text={myData.length === 50 ? '50 rows loaded' : 'Load 50 rows'}
          color={myData.length === 50 ? 'rgb(241, 41, 41)' : 'black'}
          rowsNo={50}
        />
        <LoadButton
          onLoad={loadRow}
          onShow={showRemoveRowsBtn}
          text={myData.length === 100 ? '100 rows loaded' : 'Load 100 rows'}
          color={myData.length === 100 ? 'rgb(241, 41, 41)' : 'black'}
          rowsNo={100}
        />
        <button
          onClick={() => {
            loadRow(0)
            hideRemoveRowsBtn()
          }}
          className={show ? 'removeRowsBtn' : 'hideRemoveRowsBtn'}
        >
          Remove rows
        </button>
      </div>
      <div className="table">
        <div className="tableRow tableHeader">
          <div className="tableCell">
            <input
              onClick={handleCheckAll}
              className="inputCheckBox"
              type="checkbox"
              readOnly={true}
              checked={status === 'checked' ? true : false}
            ></input>
          </div>
          <div className="tableCell">Edit</div>
          <div className="tableCell">Created at</div>
          <div className="tableCell">ID</div>
          <div className="tableCell">Name</div>
          <div className="tableCell">Owner</div>
          <div className="tableCell">Updated at</div>
          <div className="tableCell">URL</div>
        </div>
        {myData.map((row, index) => {
          return (
            <TableRow
              onCheck={handleCheck}
              checked={row.checked}
              key={index}
              input={input}
              createdAt={row.createdAt}
              id={row.id}
              name={row.name}
              owner={row.owner}
              updatedAt={row.updatedAt}
              url={row.url}
            />
          )
        })}
      </div>
    </div>
  )
}

export { Table }
