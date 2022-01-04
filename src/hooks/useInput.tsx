import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (initialValue: null | string): any => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
