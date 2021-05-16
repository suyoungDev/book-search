import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeAlt, BiHeart } from 'react-icons/bi';
import Logo from '../Page/Header/Logo';

interface Props {
  url: string;
  title: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.7rem;
  display: flex;
  border-radius: 5rem;
  margin: 0;

  ${(props) => props.theme.media.desktop} {
    padding: 0.7rem 1em;
    margin-right: 2rem;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverButton};
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icons {
    display: flex;
    font-weight: bold;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.ink50};
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme.colors.ink50};
    display: none;

    ${(props) => props.theme.media.desktopL} {
      border: none;
      display: flex;
      margin-left: 1rem;
      font-size: 1.5rem;
    }
  }

  &.active {
    .icons {
      color: ${(props) => props.theme.colors.primary50};
    }

    span {
      color: ${(props) => props.theme.colors.primary50};
    }
  }
`;

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
      {url === '/' && (
        <LinkWrapper className={`${match && `active`}`}>
          <BiHomeAlt />
          <span>{title}</span>
        </LinkWrapper>
      )}
      {url === '/record' && (
        <LinkWrapper className={`${match && `active`}`}>
          <BiHeart />
          <span>{title}</span>
        </LinkWrapper>
      )}
    </StyledLink>
  );
};

export default NavLink;