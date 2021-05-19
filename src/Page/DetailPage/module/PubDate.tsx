import React, { useLayoutEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

interface ContainerProp {
  search?: boolean;
}

const Container = styled.div<ContainerProp>`
  display: none;
  align-items: center;
  justify-content: flex-end;

  font-size: 0.7rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.ink30};

  min-width: ${({ search }) => search && `120px`};

  ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

interface Props {
  pubdate: string;
  search?: boolean;
}

const PubDate: React.FC<Props> = ({ pubdate, ...props }) => {
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
  });

  const settingDate = useCallback((pubDate: string) => {
    let pubday = Number(pubDate);
    let day: number | string = pubday % 100;
    if (day < 10) day = '0' + day;

    pubday = Math.trunc(pubday / 100);
    let month: number | string = pubday % 100;
    if (month < 10) month = '0' + month;

    pubday = Math.trunc(pubday / 100);
    let year: number | string = pubday % 100;
    if (year < 10) year = '0' + year;

    day = day.toString();
    month = month.toString();
    year = year.toString();

    if (
      typeof day === 'string' &&
      typeof month === 'string' &&
      typeof year === 'string'
    )
      setDate({ year, month, day });
  }, []);

  useLayoutEffect(() => {
    settingDate(pubdate);
  }, [settingDate, pubdate]);

  return (
    <Container {...props}>
      <p>
        {date.year}년 {date.month}월 {date.day}일
      </p>
    </Container>
  );
};

export default React.memo(PubDate);
