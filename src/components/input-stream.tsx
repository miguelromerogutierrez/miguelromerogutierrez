import React, { FormEvent, useEffect, useRef, useState } from 'react';

type InputStreamProps = {
  activeLine: boolean;
  onCommandSubmit: (command: string) => void;
  defaultText?: string;
};

const InputStream = ({ activeLine, onCommandSubmit, defaultText = '' }: InputStreamProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputStreamState, setInputStream] = useState(defaultText);

  const changeInputStream = (event: FormEvent<HTMLInputElement>) => {
    setInputStream(event.currentTarget.value);
  }
  const handleCommandSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeLine) onCommandSubmit(inputStreamState);
  };

  useEffect(() => {
    const focusInput = () => {
        inputRef.current?.focus();
      };
    
    if (activeLine) {
      focusInput();
      window.addEventListener('click', focusInput);
    }

    return () => {
      window.removeEventListener('click', focusInput);
    }
  }, [activeLine])

  return (
    <span className="text-stream-color ff-roboto">
      <form className="dil" onSubmit={handleCommandSubmit}>
        <input className="w0 bw0 pa0" ref={inputRef} onChange={changeInputStream} />{' '}
      </form>
      <span>{inputStreamState}{activeLine && '█'}</span>
    </span>
  );
};

export default InputStream;
