import React from 'react';
import { useComments } from '../hooks/useComments';
import { Comment } from './Comment';

export const CommentList = () => {
  const { comments } = useComments();

  if (comments.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#718096',
        backgroundColor: '#f7fafc',
        borderRadius: '12px',
        border: '2px dashed #e2e8f0',
        width: '100%',
        maxWidth: '600px'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>💬</div>
        <h3 style={{ 
          marginBottom: '10px',
          color: '#4a5568'
        }}>
          Brak komentarzy
        </h3>
        <p style={{ fontSize: '16px' }}>
          Bądź pierwszy i dodaj komentarz!
        </p>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h3 style={{ 
        marginBottom: '20px',
        color: '#2d3748',
        fontSize: '1.5rem',
        fontWeight: '600',
        paddingBottom: '10px',
        borderBottom: '2px solid #e2e8f0',
        textAlign: 'center',
        width: '100%'
      }}>
        💭 Komentarze ({comments.length})
      </h3>
      {comments.map(comment => (
        <div key={comment.id} style={{ width: '100%' }}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};