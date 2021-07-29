import React from 'react'
import './App.css'
import TableContainer from './Components/Table/tableContainer'
import EditPageContainer from './Components/EditPage/editPageContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataProvider } from './Components/Context/context.js'

import { Provider } from 'react-redux'

import store from './Store/store'

function App() {
  return (
    <Provider store={store}>
      <DataProvider>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact>
                <TableContainer />
              </Route>
              <Route path="/edit/:id" exact>
                <EditPageContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </DataProvider>
    </Provider>
  )
}

export default App
