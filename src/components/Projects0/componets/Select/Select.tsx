import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Categories = {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
};

type Props = {
  categories: Categories[];
  activeCategory: number;
  setActiveCategory: (index: number) => void;
};

function Select({ categories, activeCategory, setActiveCategory }: Props) {
  return (
    <div className={styles.btnsWrapper}>
      {categories.map((category, index) => {
        const isActive = activeCategory === index;

        return (
          <button
            type="button"
            key={category.title}
            className={clsx(styles.btn, { [styles.active]: isActive })}
            onClick={() => setActiveCategory(index)}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}

export default memo(Select);
