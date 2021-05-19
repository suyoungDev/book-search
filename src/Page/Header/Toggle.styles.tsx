import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icons {
    font-size: 0.8rem;
    color: #f39c12;
  }

  ${(props) => props.theme.media.phone} {
    transform: rotateZ(-90deg);
    margin-bottom: 1rem;
  }

  ${(props) => props.theme.media.tablet} {
    margin: 0;
    transform: rotateZ(0deg);
  }
`;

export const CheckBoxInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;

  width: 55px;
  height: 36px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.colors.ink50};
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
`;

export const Ball = styled.span`
  content: '';
  position: absolute;

  top: 3px;
  left: 3px;

  width: 26px;
  height: 26px;
  border-radius: 20px;

  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.ink50};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${CheckBoxInput}:checked + ${CheckBoxLabel} & {
    left: calc(55px - 6px);
    transform: translateX(-100%);
  }

  ${CheckBoxLabel}:active & {
    width: 28px;
  }
`;
