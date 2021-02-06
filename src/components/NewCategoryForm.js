import React from 'react'
import './../App.css';
import axios from 'axios';


const createNewCategory = (categoryName) => {
  const requestUrl = "http://127.0.0.1:8080/categories/new";
  let params = new URLSearchParams();
  params.append('name', categoryName)
  axios.post(requestUrl, params)
  .then((res) => {
    console.log(res.data);
  }, (err) => {
    console.error(err);
  });
}

function NewCategoryForm() {
  const [categoryName, setCategoryName] = React.useState('');

  const onTextChange = (event) => {
    setCategoryName(event.target.value);
  }
  const onSubmit = (event) => {
    createNewCategory(categoryName);
    setCategoryName('');
  }


  return (
    <div>
      <input type="text" placeholder="New Category" value={categoryName} onChange={onTextChange} />
      <button onClick={onSubmit} disabled={categoryName === ''}> Add Category </button>
    </div>
  );
}

export default NewCategoryForm;
