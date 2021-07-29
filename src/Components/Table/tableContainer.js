import { connect } from 'react-redux'
import { fetchData } from '../../Actions/fetchAction'
import { Table } from './table.jsx'

const mapStateToProps = (state) => ({
  fetchedData: state.fetchedData.data
})

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
