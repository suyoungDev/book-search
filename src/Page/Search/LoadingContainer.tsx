import React from 'react';
import { Wrapper } from './SearchModule.styles';

const LoadingContainer = () => {
  return (
    <div>
      <svg width='440' height='170'>
        <rect
          x='0'
          y='20'
          rx='10'
          ry='10'
          width='440'
          height='140'
          style={{ stroke: '#f0f0f0', strokeWidth: '2', fill: 'transparent' }}
        />
        <rect
          x='10'
          y='30'
          rx='10'
          ry='10'
          width='82'
          height='116'
          style={{ fill: '#f0f0f0' }}
        />
        <rect
          x='110'
          y='30'
          rx='10'
          ry='10'
          width='200'
          height='1.5rem'
          style={{ fill: '#f0f0f0' }}
        />
        <rect
          x='110'
          y='65'
          rx='10'
          ry='10'
          width='65'
          height='1rem'
          style={{ fill: '#f0f0f0' }}
        />
        <rect
          x='110'
          y='90'
          rx='10'
          ry='10'
          width='250'
          height='56'
          style={{ fill: '#f0f0f0' }}
        />
      </svg>
    </div>
  );
};

export default LoadingContainer;
