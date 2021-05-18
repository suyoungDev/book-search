import React, { useCallback } from 'react';
import { UpperWrapper } from '../../../Components/SideWrapper';
import Input from '../../../Components/Input';
import { useHistory, useLocation } from 'react-router';
import { BsChevronLeft } from 'react-icons/bs';
import { CirceButton } from '../../../Components/Button';
import { Row } from '../../../Components/Row';
import {
  ButtonWrapper,
  InputWrapper,
  TitleWrapper,
} from '../../../Components/Wrapper';

const LandingTitle = () => {
  let history = useHistory();
  let { pathname } = useLocation();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <UpperWrapper className={`${pathname !== '/' && 'goback'}`}>
      {pathname === '/' && (
        <InputWrapper>
          <Input placeholder='책 검색' />
        </InputWrapper>
      )}
      {pathname === '/record' && (
        <TitleWrapper className='margin'>감상 기록</TitleWrapper>
      )}
      {pathname !== '/' && pathname !== '/record' && (
        <Row className='al-ct'>
          <ButtonWrapper>
            <CirceButton onClick={goBack}>
              <BsChevronLeft />
            </CirceButton>
          </ButtonWrapper>
          <TitleWrapper>Detail</TitleWrapper>
        </Row>
      )}
    </UpperWrapper>
  );
};

export default LandingTitle;
