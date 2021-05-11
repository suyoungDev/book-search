import React from 'react';
import { Bar, SectionWrapper, SectionContainer } from '../DetailModule.styles';
import PubDate from './PubDate';

interface Prop {
  price: string | undefined;
  publisher: string | undefined;
  pubdate: string;
}

const DetailSection: React.FC<Prop> = ({ price, pubdate, publisher }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <p>{price}</p>
        <span>가격</span>
      </SectionWrapper>
      <Bar />
      <SectionWrapper>
        {typeof publisher === 'string' && (
          <p dangerouslySetInnerHTML={{ __html: publisher }} />
        )}
        <span>출판사</span>
      </SectionWrapper>
      <Bar />
      <SectionWrapper>
        <PubDate pubdate={pubdate} />
        <span>출판일</span>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default DetailSection;
