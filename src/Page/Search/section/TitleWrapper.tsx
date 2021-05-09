import React from 'react';
import { Title } from '../DetailModule.styles';

interface TitleProp {
  title: string;
}

const TitleWrapper: React.FC<TitleProp> = ({ title }) => {
  return (
    <Title>
      <h2>{title}</h2>
    </Title>
  );
};

export default TitleWrapper;
