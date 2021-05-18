import React, { useEffect, useRef } from 'react';

const useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (event: any) => {
      const target: HTMLDivElement = event.target;
      if (domNode.current && !domNode.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', clickHandler);
    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, []);

  return domNode;
};

export default useClickOutside;
