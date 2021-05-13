import React from 'react';
import { AuthorDetail } from '../../SearchPage/module/SearchModule.styles';

interface Prop {
  author: string;
}

const BookAuthor: React.FC<Prop> = ({ author }) => {
  return (
    <AuthorDetail>
      <p dangerouslySetInnerHTML={{ __html: author }} />
    </AuthorDetail>
  );
};

export default BookAuthor;
