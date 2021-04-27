import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 0.7rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.ink40};
  display: none;

  ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

interface Props {
  children: string;
}

const PubDate: React.FC<Props> = ({ children }) => {
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
    settingDate(children);
  }, [children]);

  return (
    <Container>
      {date.year}년 {date.month}월 {date.day}일
    </Container>
  );
};

export default PubDate;
