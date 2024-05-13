import React, { memo } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

function Copy() {
  const year = new Date().getFullYear();

  return (
    <p className={styles.privacy}>
      Jedi © {year}.&nbsp;
      <Link className={styles.link} href="/">
        Privacy Policy
      </Link>
    </p>
  );
}

export default memo(Copy);
