import React, { useState, useEffect } from 'react';
import PubDate from './PubDate';

interface Prop {
  createdAt: Date;
}

const PubDateContainer: React.FC<Prop> = ({ createdAt }) => {
  const [pubDate, setPubDate] = useState('');

  useEffect(() => {
    const date: number = createdAt.getDate();
    const month: number = createdAt.getMonth();
    const year: number = createdAt.getFullYear();

    const fullDate: string = '' + year + month + date;
    setPubDate(fullDate);
  }, [createdAt]);

  if (!pubDate) return null;

  return <PubDate pubdate={pubDate} />;
};

export default PubDateContainer;
