import React from 'react';
import { DescriptionDetail } from '../SearchModule.styles';

interface Prop {
  description: string;
}

const BookDescription: React.FC<Prop> = ({ description }) => {
  return (
    <DescriptionDetail>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </DescriptionDetail>
  );
};

export default BookDescription;
