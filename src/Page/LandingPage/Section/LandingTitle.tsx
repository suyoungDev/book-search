import React from 'react';
import {
  ButtonWrapper,
  UpperWrapper,
  InputWrapper,
} from '../../../Components/SideWrapper';
import Input from '../../../Components/Input';
import { useHistory, useLocation } from 'react-router';
import { BsChevronLeft } from 'react-icons/bs';
import { CirceButton } from '../../../Components/Button';
import { Row } from '../../../Components/Row';

const LandingTitle = () => {
  let history = useHistory();
  let { pathname } = useLocation();

  const goBack = () => {
    history.goBack();
  };

  return (
    <UpperWrapper className={`${pathname !== '/' && 'goback'}`}>
      {pathname !== '/' && (
        <Row className=' al-ct'>
          <ButtonWrapper>
            <CirceButton onClick={goBack}>
              <BsChevronLeft />
            </CirceButton>
          </ButtonWrapper>
          <InputWrapper>책 소개</InputWrapper>
        </Row>
      )}
      {pathname === '/' && (
        <InputWrapper>
          <Input placeholder='책 검색' />
        </InputWrapper>
      )}
    </UpperWrapper>
  );
};

export default LandingTitle;
