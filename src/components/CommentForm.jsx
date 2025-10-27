import React, { useState } from 'react';
import { useComments } from '../hooks/useComments';

export const CommentForm = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const { addComment } = useComments();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.trim() && content.trim()) {
      addComment(author, content);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '25px',
      border: '2px solid #e1e5e9',
      borderRadius: '12px',
      marginBottom: '25px',
      backgroundColor: '#ffffff',
      width: '100%'
    }}>
      <h3 style={{ 
        marginBottom: '20px',
        color: '#2d3748',
        fontSize: '1.4rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        💬 Dodaj komentarz
      </h3>
      
      <input
        type="text"
        placeholder="Twoje imię *"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 15px',
          border: '2px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '16px',
          backgroundColor: '#f7fafc',
          marginBottom: '15px',
          color: "#000000"
        }}
        required
      />
      
      <textarea
        placeholder="Twój komentarz... *"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        style={{
          width: '100%',
          padding: '12px 15px',
          border: '2px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '16px',
          backgroundColor: '#f7fafc',
          marginBottom: '20px',
          color: "#000000",
          resize: 'vertical'
        }}
        required
      />
      
      <button
        type="submit"
        style={{
          padding: '12px 30px',
          backgroundColor: '#4299e1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          width: '100%'
        }}
      >
        📝 Opublikuj komentarz
      </button>
    </form>
  );
};