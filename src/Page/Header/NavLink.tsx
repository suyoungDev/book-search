import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BiHomeAlt, BiHeart } from 'react-icons/bi';
import Logo from './Logo';
import { StyledLink, LinkWrapper } from './NavLink.styles';

interface Props {
  url: string;
  title: string;
}

const NavLink: React.FC<Props> = ({ url, title }) => {
  let match = useRouteMatch({
    path: url,
    exact: true,
  });

  if (title === 'logo') {
    return (
      <StyledLink to={url} title={title}>
        <LinkWrapper>
          <Logo />
        </LinkWrapper>
      </StyledLink>
    );
  }

  return (
    <StyledLink to={url} title={title}>
      <LinkWrapper className={`${match && `active`}`}>
        {url === '/' && <BiHomeAlt />}
        {url === '/record' && <BiHeart />}
        <span>{title}</span>
      </LinkWrapper>
    </StyledLink>
  );
};

export default NavLink;
