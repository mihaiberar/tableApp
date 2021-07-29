import React, { useState, useEffect, createContext } from 'react'

export const Context = createContext()

function DataProvider(props) {
  const [data, setData] = useState([])

  function fetchData() {
    fetch('https://607fe0fca5be5d00176dc7b2.mockapi.io/api/table-data')
      .then((res) => res.json())
      .then((json) => setData(json))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <Context.Provider value={[data, setData]}>{props.children}</Context.Provider>
}

export { DataProvider }
