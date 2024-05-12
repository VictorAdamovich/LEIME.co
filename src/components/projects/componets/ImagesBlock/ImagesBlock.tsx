import React, { memo } from 'react';
import Image from 'next/image';
import { ImageType } from 'types';

import styles from './styles.module.scss';

type Props = {
  images: ImageType[];
};

function ImagesBlock({ images }: Props) {
  return (
    <div className={styles.wrapper}>
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}

export default memo(ImagesBlock);
