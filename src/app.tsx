import 'core-js/features/set'
import 'core-js/features/map'
import 'core-js/features/promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './route'
import './assets/index.less'

const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter basename="/sub-qmyx-cms">
        <Router />
    </BrowserRouter>,
    MOUNT_NODE
)
