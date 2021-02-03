import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { URLSearchParams } from 'url';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'application/json;charset=utf-8';

const createNewCategory = (category_name) => {
  const request_url = "http://127.0.0.1:8080/categories/new";
  let params = new URLSearchParams();
  params.append('name', category_name)
  axios.post(request_url, params)
  .then((res) => {
    console.log(res.data);
  }, (err) => {
    console.error(err);
  });
}

function App() {
  const [category_name, setCategoryName] = React.useState('');

  const onTextAreaChange = (event) => {
    setCategoryName(event.target.value);
  }

  const onSubmit = (event) => {
    createNewCategory(category_name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <textarea onChange={onTextAreaChange} />
        <button onClick={onSubmit}>Add Category</button>
      </header>
    </div>
  );
}

export default App;
