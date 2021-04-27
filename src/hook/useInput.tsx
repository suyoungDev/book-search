import React from 'react';

const useInput = (initial: {}) => {
  const [input, setInput] = React.useState(initial);

  const hanlder = React.useCallback(
    (event) => {
      const { name, value } = event.target;
      setInput({ ...input, [name]: value });
    },
    [input]
  );

  const reset = React.useCallback(() => {
    setInput(initial);
  }, [initial]);

  return [input, hanlder, reset];
};

export default useInput;
