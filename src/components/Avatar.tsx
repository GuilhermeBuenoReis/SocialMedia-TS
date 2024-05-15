import React from 'react';
import styles from './Avatar.module.css';

interface avatarProps {
  hasBorder: boolean;
  src: string;
  alt: string
}

function Avatar({ hasBorder = true, src, alt }: avatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className=
      {
        hasBorder
          ?
          styles.avatarWithBorder
          :
          styles.avatar
      }
    />

  );
}

export { Avatar };
