import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = e => setTitle(e.target.value);

  const onContentChange = e => setContent(e.target.value);
  
  const onSavePostClicked = (e) => {
    e.preventDefault()
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('');
      setContent('');
    }
  }
  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text" 
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChange}
        />
        <button type="submit" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm