import React, { ReactNode } from 'react';

type LogLineProps = {
  text?: ReactNode;
}

const LogLine = ({text}: LogLineProps) => {
  return (
    <div className="text-stream-color ff-roboto f5">
      {text}
    </div>
  )
};

export default LogLine;
