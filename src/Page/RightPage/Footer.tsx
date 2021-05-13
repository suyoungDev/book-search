import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  Container,
  Wrapper,
  SmallSpan,
  SmallWrapper,
  ALink,
} from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SmallWrapper>
          <h3>DESIGN AND CODE BY</h3>
          <p>poked.by.mocha@gmail.com</p>
          <ALink>
            <a
              href='https://github.com/mochapoke'
              target='_blank'
              rel='noreferrer'
              title='깃허브로 이동'
            >
              <AiFillGithub />
            </a>
          </ALink>
        </SmallWrapper>
        <SmallWrapper>
          <SmallSpan>side project 2021</SmallSpan>
        </SmallWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
