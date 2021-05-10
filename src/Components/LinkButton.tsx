import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeAlt, BiHeart } from 'react-icons/bi';

interface Props {
  url: string;
  title: string;
  currentPath: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;

  .icons {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.ink50};
  }

  &.currentPath {
    .icons {
      color: ${(props) => props.theme.colors.primary50};
    }
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverButton};
  }
`;

const LinkButton: React.FC<Props> = ({ url, title, currentPath }) => {
  return (
    <StyledLink
      to={url}
      title={title}
      className={`${currentPath === url && `currentPath`}`}
    >
      {url === '/' && <BiHomeAlt />}
      {url === '/record' && <BiHeart />}
    </StyledLink>
  );
};

export default LinkButton;
