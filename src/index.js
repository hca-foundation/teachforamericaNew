import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import './styles/index.scss'
//import reportWebVitals from './reportWebVitals';
import Amplify from '@aws-amplify/core'
import { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
import 'react-toastify/dist/ReactToastify.css'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
