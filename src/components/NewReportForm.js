import React from 'react';
import '../App.css';
import axios from 'axios';
import CategorySelector from './CategorySelector'


const createNewReport = (comment, date, categoryId) => {
  const requestUrl = "http://localhost:8080/reports/new";
  let params = new URLSearchParams();
  params.append('comment', comment);
  params.append('date', date);
  params.append('category_id', categoryId);
  console.log(comment, date, categoryId);
  axios.post(requestUrl, params)
    .then(res => {
      console.log(res.data);
    }, err => {
      console.error(err);
    })
}

const NewReportForm = () => {
  const [comment, setComment] = React.useState('');
  const [category, setCategory] = React.useState(0);
  const [date, setDate] = React.useState('');

  const onCommentChanged = (event) => {
    setComment(event.target.value);
  }
  const onCategoryChanged = (event) => {
    setCategory(event.target.value);
  }
  const onDateChanged = (event) => {
    setDate(event.target.value);
  }
  const onSubmit = (event) => {
    createNewReport(comment, date, category);
    setComment('');
  }

  return (
    <div>
      <textarea onChange={onCommentChanged} />
      <input type="date" onChange={onDateChanged} />
      <CategorySelector onChange={onCategoryChanged} />
      <button onClick={onSubmit}>Add Report</button>
    </div>
  );
}

export default NewReportForm;
