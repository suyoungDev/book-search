import React from 'react';
import styled from 'styled-components';
import StarBox from '../../../Components/StarBox';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ImgProps {
  source?: string;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.body40};

  width: 270px;
  height: 340px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  position: relative;
`;

const Title = styled.div`
  p {
    b {
      font-weight: 200;
    }
    font-weight: 200;
  }
`;

const Gradation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  background: linear-gradient(
    180deg,
    rgba(31, 31, 31, 0) 0%,
    rgba(31, 31, 31, 1) 100%
  );
`;

const ImgBox = styled.div<ImgProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-image: ${({ source }) => `url(${source})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const DataContainer = styled.div`
  z-index: 2;
`;

interface Props {
  title: string;
  comment: string;
  image: string;
}

const RecordModule: React.FC<Props> = ({ title, comment, image }) => {
  return (
    <Wrapper>
      <Container>
        <ImgBox source={image} />
        <Gradation />
        <DataContainer>
          <Title>
            <p dangerouslySetInnerHTML={{ __html: title }} />
          </Title>
          <StarBox />
          <div>{comment}</div>
        </DataContainer>
      </Container>
    </Wrapper>
  );
};

export default RecordModule;
