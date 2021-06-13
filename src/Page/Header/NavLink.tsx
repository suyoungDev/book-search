import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { BiHash, BiMessageSquareDetail } from 'react-icons/bi';
import Logo from './Logo';
import { StyledLink, LinkWrapper, StyledNavLink } from './NavLink.styles';
import { cancleFetch } from '../../actions/book.actions.types';

interface Props {
  url: string;
  title: string;
}

const NavLink: React.FC<Props> = ({ url, title }) => {
  const dispatch = useDispatch();

  const goHome = useCallback(() => {
    dispatch(cancleFetch());
  }, [dispatch]);

  if (title === '로고') {
    return (
      <StyledLink to={url} title={title} onClick={goHome}>
        <LinkWrapper>
          <Logo />
        </LinkWrapper>
      </StyledLink>
    );
  }

  return (
    <StyledNavLink exact to={url} title={title} activeClassName='active'>
      <LinkWrapper>
        {url === '/' && <BiHash />}
        {url === '/record' && <BiMessageSquareDetail />}
        <span>{title}</span>
      </LinkWrapper>
    </StyledNavLink>
  );
};

export default NavLink;
