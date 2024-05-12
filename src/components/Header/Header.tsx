import React, { memo } from 'react';
import { Logo } from 'components';

import { Navigation } from './components';
import { CONTENT } from './content';
import styles from './styles.module.scss';

function Header() {
  const { logo, navigation } = CONTENT;

  return (
    <>
      {/* <MobileHeader /> */}
      <header className={styles.wrapper}>
        <Logo {...logo} />
        <Navigation navigation={navigation} />
      </header>
    </>
  );
}

export default memo(Header);
