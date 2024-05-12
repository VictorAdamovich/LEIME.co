'use client';

import React, { memo } from 'react';

import { Blog, Copy, Form, Info } from './components';
import { BLOG, CONTENT, SOCIAL } from './content';
import styles from './styles.module.scss';

function Footer() {
  const { logo } = CONTENT;

  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <Info socialLinks={SOCIAL} logo={logo} />
        <Blog blogs={BLOG} />
        <Form />
      </div>
      <Copy />
    </footer>
  );
}

export default memo(Footer);
