import React from 'react';

interface Prop {
  text: string;
}

const P: React.FC<Prop> = ({ text }) => {
  return <p dangerouslySetInnerHTML={{ __html: text }} />;
};

export default React.memo(P);
