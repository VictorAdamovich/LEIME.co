'use client';

import React, { memo, useState } from 'react';
import clsx from 'clsx';

import { CONTENT } from '../../content';
import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = CONTENT;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.burgerWrapper} onClick={handleOpen}>
        <div className={clsx(styles.burger, { [styles.active]: isOpen })} />
      </button>
      <div className={styles.mobileNavigation}>
        <Navigation navigation={navigation} />
      </div>
    </div>
  );
}

export default memo(MobileHeader);
