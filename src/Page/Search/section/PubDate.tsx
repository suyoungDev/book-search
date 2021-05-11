import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  font-size: 0.7rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.ink30};
  display: none;

  ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

interface Props {
  pubdate: string;
}

const PubDate: React.FC<Props> = ({ pubdate }) => {
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
  });

  const settingDate = (pubDay: string) => {
    let date = pubDay.split('');
    const year = date.splice(0, 4).join('');
    const month = date.splice(0, 2).join('');
    const day = date.join('');

    setDate({ year, month, day });
  };

  useLayoutEffect(() => {
    settingDate(pubdate);
  }, [pubdate]);

  return (
    <Container>
      <p>
        {date.year}년 {date.month}월 {date.day}일
      </p>
    </Container>
  );
};

export default PubDate;