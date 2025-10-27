import React from 'react';
import { CommentsProvider } from './components/CommentsProvider';
import { CommentForm } from './components/CommentForm';
import { CommentList } from './components/CommentList';

function BlogPost() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      <article style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        marginBottom: '30px',
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '20px',
          color: '#2d3748',
          textAlign: 'center'
        }}>
          Przykładowy post bloga
        </h1>
        <p style={{ 
          fontSize: '18px', 
          lineHeight: '1.7',
          color: '#4a5568'
        }}>
          To jest treść Twojego posta na blogu. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.
        </p>
      </article>

      {/* SYSTEM KOMENTARZY */}
      <CommentsProvider postId="post-1">
        <div style={{ 
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          width: '100%'
        }}>
          <CommentForm />
          <CommentList />
        </div>
      </CommentsProvider>
    </div>
  );
}

export default BlogPost;