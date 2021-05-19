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

  const settingDate = useCallback((pubDay: string) => {
    let date = pubDay.split('');
    const year = date.splice(0, 4).splice(2, 2).join('');
    const month = date.splice(0, 2).join('');
    const day = date.join('');

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

export default PubDate;
