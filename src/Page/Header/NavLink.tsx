import React, { useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { BiHash, BiMessageSquareDetail } from 'react-icons/bi';
import Logo from './Logo';
import { StyledLink, LinkWrapper } from './NavLink.styles';
import { cancleFetch } from '../../actions/book.actions.types';

interface Props {
  url: string;
  title: string;
}

const NavLink: React.FC<Props> = ({ url, title }) => {
  const dispatch = useDispatch();
  let match = useRouteMatch({
    path: url,
    exact: true,
  });

  const goHome = useCallback(() => {
    dispatch(cancleFetch());
  }, [dispatch]);

  if (title === 'logo') {
    return (
      <StyledLink to={url} title={title} onClick={goHome}>
        <LinkWrapper>
          <Logo />
        </LinkWrapper>
      </StyledLink>
    );
  }

  return (
    <StyledLink to={url} title={title}>
      <LinkWrapper className={`${match && `active`}`}>
        {url === '/' && <BiHash />}
        {url === '/record' && <BiMessageSquareDetail />}
        <span>{title}</span>
      </LinkWrapper>
    </StyledLink>
  );
};

export default NavLink;
