import React from 'react';
import { TitleDetail } from '../../SearchPage/module/SearchModule.styles';

interface Prop {
  title: string;
}

const BookTitle: React.FC<Prop> = ({ title }) => {
  return (
    <TitleDetail>
      <p dangerouslySetInnerHTML={{ __html: title }} />
    </TitleDetail>
  );
};

export default BookTitle;
