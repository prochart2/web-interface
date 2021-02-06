import React from 'react'
import './App.css';
import axios from 'axios';
import NewCategoryForm from './components/NewCategoryForm'
import NewReportForm from './components/NewReportForm'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'application/json;charset=utf-8';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewReportForm />
        <NewCategoryForm />
      </header>
    </div>
  );
}

export default App;
