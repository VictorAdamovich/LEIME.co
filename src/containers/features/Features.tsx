import React, { memo } from 'react';

import { FeaturesList } from './components';
import { CONTENT } from './content';
import styles from './styles.module.scss';

function Features() {
  const { title, features } = CONTENT;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <FeaturesList features={features} />
    </div>
  );
}

export default memo(Features);
