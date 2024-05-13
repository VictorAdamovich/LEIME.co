'use client';

import React, { memo } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { Logo } from 'components';

import { MobileHeader, Navigation } from './components';
import { CONTENT } from './content';
import styles from './styles.module.scss';

const BREAKPOINT_MOBILE = 768;

function Header() {
  const { logo, navigation } = CONTENT;
  const size = useWindowSize();

  const isMobile = size?.width ? size?.width <= BREAKPOINT_MOBILE : false;

  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContent}>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <>
            <Logo {...logo} />
            <Navigation navigation={navigation} />
          </>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
