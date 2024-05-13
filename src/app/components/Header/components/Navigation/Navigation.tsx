'use client';

import React, { memo, useState } from 'react';
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
  const [activeIndex, setActive] = useState(0);

  return (
    <ul className={styles.list}>
      {navigation.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            key={item.title}
            className={clsx(styles.listItem, { [styles.active]: isActive })}
          >
            <a onClick={() => setActive(index)} className={styles.link} href={item.href}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(Navigation);
