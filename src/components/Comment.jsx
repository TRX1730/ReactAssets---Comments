import React from 'react';
import { useComments } from '../hooks/useComments';

export const Comment = ({ comment }) => {
  const { deleteComment, likeComment } = useComments();

  return (
    <div style={{
      padding: '20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      marginBottom: '15px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'all 0.2s ease',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div>
          <strong style={{ 
            fontSize: '17px', 
            color: '#2d3748',
            display: 'block',
            marginBottom: '5px'
          }}>
            👤 {comment.author}
          </strong>
          <span style={{ 
            fontSize: '13px', 
            color: '#718096',
            fontWeight: '500'
          }}>
            📅 {comment.date}
          </span>
        </div>
        
        <button
          onClick={() => deleteComment(comment.id)}
          style={{
            background: 'none',
            border: 'none',
            color: '#e53e3e',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '5px',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
          title="Usuń komentarz"
          onMouseOver={(e) => e.target.style.backgroundColor = '#fed7d7'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          🗑️
        </button>
      </div>
      
      <p style={{ 
        margin: '0 0 20px 0',
        lineHeight: '1.6',
        fontSize: '16px',
        color: '#4a5568'
      }}>
        {comment.content}
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <button
          onClick={() => likeComment(comment.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '15px',
            padding: '8px 15px',
            borderRadius: '20px',
            backgroundColor: '#f7fafc',
            color: '#4a5568',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#edf2f7'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f7fafc'}
        >
          <span>👍</span>
          Polub ({comment.likes || 0})
        </button>
      </div>
    </div>
  );
};