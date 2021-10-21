import React from 'react';
import InputStream from './input-stream';

type ConsoleLineProps = {
  onCommandSubmit(command: string): void;
  activeLine: boolean;
  text?: string;
}

const ConsoleLine = ({onCommandSubmit, activeLine, text}: ConsoleLineProps) => {
  return (
    <div className="text-stream-color f5">
      <span className="ff-caveat cyan">Resume<a className="green magenta-hover no-underline" href="https://github.com/miguelromerogutierrez" target='_blank' rel="noreferrer">@miguelromerogutierrez</a></span>{' '}
      <InputStream activeLine={activeLine} onCommandSubmit={onCommandSubmit} defaultText={text} />
    </div>
  )
};

export default ConsoleLine;
