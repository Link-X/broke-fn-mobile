import 'core-js/features/set'
import 'core-js/features/map'
import 'core-js/features/promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Root from './root'
import './assets/index.less'
import configureStore from './configureStore'

const store = configureStore()
const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/borker">
            <Root />
        </BrowserRouter>
    </Provider>,
    MOUNT_NODE
)
