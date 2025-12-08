import React, { CSSProperties } from 'react';

export type ConfettiProps = {
  className?: string;
  style?: CSSProperties;
};

export default function Confetti(props: ConfettiProps) {
  const { className, style } = props;
  return <div className={className} style={style}></div>;
}
