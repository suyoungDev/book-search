import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeAlt, BiHeart } from 'react-icons/bi';

interface Props {
  url: string;
  title: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  .icons {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary50};
  }

  :hover {
    .icons {
      color: ${(props) => props.theme.colors.primary60};
    }
  }
`;

const LinkButton: React.FC<Props> = ({ url, title }) => {
  return (
    <StyledLink to={url} title={title}>
      {url === '/' && <BiHomeAlt />}
      {url === '/record' && <BiHeart />}
    </StyledLink>
  );
};

export default LinkButton;
