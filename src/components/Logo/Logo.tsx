import React, { memo } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ImageType } from 'types';

import styles from './styles.module.scss';

type Props = {
  mainIcon: ImageType;
  logoTitleIcon: ImageType;
  logoDescription: string;
  className?: string;
};

function Logo({ mainIcon, logoTitleIcon, logoDescription, className = '' }: Props) {
  return (
    <div className={clsx(styles.logo, className)}>
      <Image
        className={styles.mainIcon}
        width={mainIcon.width}
        height={mainIcon.height}
        src={mainIcon.src}
        alt={mainIcon.alt}
      />
      <div className={styles.logoContent}>
        <Image
          className={styles.logoTitleIcon}
          width={logoTitleIcon.width}
          height={logoTitleIcon.height}
          src={logoTitleIcon.src}
          alt={logoTitleIcon.alt}
        />
        <p className={styles.logoDescription}>{logoDescription}</p>
      </div>
    </div>
  );
}

export default memo(Logo);
