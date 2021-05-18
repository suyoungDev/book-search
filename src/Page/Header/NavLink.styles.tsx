import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 0.7rem;
  border-radius: 5rem;
  margin: 0;

  ${(props) => props.theme.media.desktop} {
    padding: 0.7rem 1em;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverButton};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icons {
    display: flex;
    font-weight: bold;
    color: ${(props) => props.theme.colors.ink50};
  }

  span {
    display: none;
  }

  &.active {
    .icons {
      color: ${(props) => props.theme.colors.primary50};
    }
    span {
      color: ${(props) => props.theme.colors.primary50};
    }
  }
  font-size: 2rem;

  ${(props) => props.theme.media.phone} {
    .icons {
      font-size: 1.5rem;
    }
  }
  ${(props) => props.theme.media.tablet} {
    .icons {
      font-size: 2rem;
    }
  }

  ${(props) => props.theme.media.desktopL} {
    span {
      border: none;
      display: flex;
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.ink50};
    }
  }
`;
