import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  url: string;
  title: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;

  span {
    font-weight: bold;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primary50};
  }

  :hover {
    span {
      color: ${(props) => props.theme.colors.primary60};
    }
  }
`;

const LinkButton: React.FC<Props> = ({ url, title }) => {
  return (
    <StyledLink to={url}>
      <span>{title}</span>
    </StyledLink>
  );
};

export default LinkButton;
