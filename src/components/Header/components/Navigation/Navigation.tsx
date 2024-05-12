import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type NavigationItem = {
  title: string;
  href: string;
};

type Props = {
  navigation: NavigationItem[];
};

function Navigation({ navigation }: Props) {
  return (
    <ul className={styles.list}>
      {navigation.map((item) => (
        <li key={item.title} className={clsx(styles.listItem, styles.active)}>
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default memo(Navigation);
