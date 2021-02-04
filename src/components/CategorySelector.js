import React from 'react';
import '../App.css';
import axios from 'axios';


const pullCategories = setCategoryList => {
  const request_url = "http://localhost:8080/categories";
  axios.get(request_url)
  .then(res => {
    setCategoryList(res.data);
  }, err => {
    console.error(err);
  });
}

// init は最初のロードのみ実行するための引数
const CategorySelector = ({ init } = { init: true })=> {
  const [CategoryList, setCategoryList] = React.useState([]);

  const categoryOptions = CategoryList.map(({id, name}) => {
    return <option key={id} value={id}>{name}</option>;
  });
  React.useEffect(() => {
    pullCategories(setCategoryList);
  }, [init]);

  return (
    <select name="categories">
      { categoryOptions }
    </select>
  )
}

export default CategorySelector;
