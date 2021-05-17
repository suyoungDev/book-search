import React, { useState, useEffect } from 'react';
import PubDate from './PubDate';

interface Prop {
  createdAt: Date;
}

const PubDateContainer: React.FC<Prop> = ({ createdAt }) => {
  const [pubDate, setPubDate] = useState('');

  useEffect(() => {
    const date: number = createdAt.getDate();
    let month: number | string = createdAt.getMonth() + 1;
    const year: number = createdAt.getFullYear();

    if (month < 10) month = '0' + month;

    const fullDate: string = '' + year + month + date;

    setPubDate(fullDate);
  }, [createdAt]);

  if (!pubDate) return null;

  return <PubDate pubdate={pubDate} />;
};

export default PubDateContainer;
