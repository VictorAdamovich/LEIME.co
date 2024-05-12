'use client';

import React, { memo, useState } from 'react';

import { ImagesBlock, Select } from './componets';
import { CONTENT } from './content';
import styles from './styles.module.scss';

function Projects() {
  const { title, description, categories } = CONTENT;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.description}>{description}</h3>

      <Select
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ImagesBlock images={categories[activeCategory].images} />
    </div>
  );
}

export default memo(Projects);
