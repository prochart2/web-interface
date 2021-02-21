import React from 'react';
import '../App.css';
import axios from 'axios';


const pullCategories = setCategoryList => {
  const requestUrl = "http://localhost:8080/categories";
  axios.get(requestUrl)
  .then(res => {
    setCategoryList(res.data);
  }, err => {
    console.error(err);
  });
}

const CategorySelector = (props)=> {
  const [CategoryList, setCategoryList] = React.useState([]);

  const categoryOptions = CategoryList.map(({id, name}) => {
    return <option key={id} value={id}>{name}</option>;
  });
  React.useEffect(() => {
    pullCategories(setCategoryList);
  }, [props.init]);  // FIXME: 1回のみの実行

  return (
    <select name="categories" onChange={props.onChange}>
      { categoryOptions }
    </select>
  )
}

export default CategorySelector;
