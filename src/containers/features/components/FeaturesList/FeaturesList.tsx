import React, { memo } from 'react';
import Image from 'next/image';
import { ImageType } from 'types';

import styles from './styles.module.scss';

type Features = {
  title: string;
  description: string;
  icon: ImageType;
};

type Props = {
  features: Features[];
};

function FeaturesList({ features }: Props) {
  return (
    <div className={styles.wrapper}>
      {features.map((feature) => (
        <div key={feature.title} className={styles.feature}>
          <div className={styles.iconWrapper}>
            <Image
              className={styles.icon}
              src={feature.icon.src}
              alt={feature.icon.alt}
              width={feature.icon.width}
              height={feature.icon.height}
            />
          </div>

          <h4 className={styles.title}>{feature.title}</h4>
          <p className={styles.description}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default memo(FeaturesList);
