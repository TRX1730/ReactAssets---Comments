import { useContext } from 'react';
import { CommentsContext } from '../components/CommentsProvider';

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error('useComments must be used within CommentsProvider');
  }
  return context;
};