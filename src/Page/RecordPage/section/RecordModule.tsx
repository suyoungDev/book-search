import React from 'react';

interface Props {
  title: string;
  comment: string;
  image: string;
}

const RecordModule: React.FC<Props> = ({ title, comment, image }) => {
  return (
    <div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div>{image}</div>
      <div>{comment}</div>
    </div>
  );
};

export default RecordModule;
