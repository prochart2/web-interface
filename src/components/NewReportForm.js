import React from 'react';
import '../App.css';
import axios from 'axios';
import CategorySelector from './CategorySelector'


const NewReportForm = () => {
  const [comment, setComment] = React.useState('');
  const [category, setCategory] = React.useState(0);

  const onCommentChanged = (event) => {
    setComment(event.target.value);
  }
  const onCategoryChanged = (event) => {
    setCategory(event.target.value);
  }
  const onSubmit = (event) => {
  }

  return (
    <div>
      <textarea onChange={onCommentChanged} />
      <CategorySelector onChange={onCategoryChanged} />
      <button onClick={onSubmit}>Add Report</button>
    </div>
  );
}

export default NewReportForm;
