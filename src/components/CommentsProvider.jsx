import React, { createContext, useState, useEffect } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children, postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${postId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postId]);

  const saveComments = (newComments) => {
    setComments(newComments);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(newComments));
  };

  const addComment = (author, content) => {
    const newComment = {
      id: Date.now(),
      author,
      content,
      date: new Date().toLocaleDateString('pl-PL'),
      likes: 0
    };
    saveComments([...comments, newComment]);
  };

  const deleteComment = (commentId) => {
    saveComments(comments.filter(comment => comment.id !== commentId));
  };

  const likeComment = (commentId) => {
    saveComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const value = {
    comments,
    addComment,
    deleteComment,
    likeComment,
    loading
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};