import { FETCH_DATA } from './types'

export const fetchData = () => {
  return (dispatch) => {
    fetch('https://607fe0fca5be5d00176dc7b2.mockapi.io/api/table-data')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_DATA,
          payload: data
        })
      )
  }
}
