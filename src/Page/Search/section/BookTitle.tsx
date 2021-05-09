import React from 'react';
import { TitleBook } from '../SearchModule.styles';

interface Prop {
  title: string;
}

const BookTitle: React.FC<Prop> = ({ title }) => {
  return (
    <TitleBook>
      <p dangerouslySetInnerHTML={{ __html: title }} />
    </TitleBook>
  );
};

export default BookTitle;
