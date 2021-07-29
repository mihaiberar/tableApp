import React, { useState, useEffect } from 'react'
import styles from './editPage.module.css'
// import { useContext } from 'react'
// import { Context } from '../Context/context.js'
import { Link, useParams } from 'react-router-dom'

function EditPage(props) {
  // const [data] = useContext(Context)

  const [data, setData] = useState([])
  const { id } = useParams()

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')

  const [edit, setEdit] = useState(true)

  useEffect(() => {
    props.fetchData()
    // eslint-disable-next-line no-console
    console.log(props.fetchedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(data);

  useEffect(() => {
    setData(props.fetchedData)
  }, [props.fetchedData])

  useEffect(() => {
    if (data.length > 0) {
      const myData = data.filter((item) => item.id === id)

      setName(myData[0].name)
      setOwner(myData[0].owner)
      setUpdatedAt(myData[0].updatedAt)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  function updateName(event) {
    setName(event.target.value)
  }

  function updateOwner(event) {
    setOwner(event.target.value)
  }

  function updateUpdateAt(event) {
    setUpdatedAt(event.target.value)
  }

  function clickHandler() {
    data[id - 1].name = name
    data[id - 1].owner = owner
    data[id - 1].updatedAt = updatedAt

    // eslint-disable-next-line no-console
    console.log(data)
  }

  function handleEdit() {
    setEdit((prevVal) => {
      return !prevVal ? true : false
    })
  }

  return (
    <div className={styles.editPage}>
      <div className={styles.editHeader}>
        <h1>Edit:</h1>
        <button
          style={{
            width: '30px',
            height: '30px',
            marginTop: '30px',
            marginLeft: '30px',
            backgroundColor: edit ? 'rgb(241, 41, 41)' : 'white'
          }}
          onClick={handleEdit}
        >
          ✎
        </button>
      </div>
      <div className={styles.idName}>
        <input className={styles.idInput} type="text" name="id" placeholder="id" value={id} readOnly={true}></input>
        <input
          className={styles.nameInput}
          type="text"
          name="name"
          placeholder="name"
          value={name}
          readOnly={!edit ? false : true}
          style={{ outline: edit ? 'none' : 'auto' }}
          onChange={updateName}
        ></input>
      </div>
      <div className={styles.ownerUpdateAt}>
        <input
          className={styles.ownerInput}
          type="text"
          name="owner"
          placeholder="owner"
          value={owner}
          readOnly={!edit ? false : true}
          style={{ outline: edit ? 'none' : 'auto' }}
          onChange={updateOwner}
        ></input>
        <input
          className={styles.updatedAtInput}
          type="text"
          name="updated at"
          placeholder="updated at"
          value={updatedAt}
          readOnly={!edit ? false : true}
          style={{ outline: edit ? 'none' : 'auto' }}
          onChange={updateUpdateAt}
        ></input>
      </div>
      <div className={styles.cancelSaveBtns}>
        <Link to="/">
          <button className="cancelBtn">Cancel</button>
        </Link>
        <Link to="/">
          <button onClick={clickHandler} className="saveBtn">
            Save
          </button>
        </Link>
      </div>
    </div>
  )
}

export { EditPage }
