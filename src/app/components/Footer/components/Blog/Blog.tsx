import React, { memo } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { ImageType } from 'types';

import { DATE_FORMAT } from './constants';
import styles from './styles.module.scss';

type BlogItem = {
  avatar: ImageType;
  date: Date;
  title: string;
};

type Props = {
  blogs: BlogItem[];
};

function Blog({ blogs }: Props) {
  return (
    <div className={styles.blog}>
      <h5 className={styles.title}>Latest from the blog</h5>
      <div className={styles.posts}>
        {blogs.map(({ avatar, date, title }) => (
          <div key={title} className={styles.post}>
            <Image
              className={styles.image}
              width={avatar.width}
              height={avatar.height}
              src={avatar.src}
              alt={avatar.alt}
            />
            <div className={styles.content}>
              <p className={styles.postDate}>
                <Image
                  className={styles.arrow}
                  width={13}
                  height={13}
                  src="/images/footer/social/arrow.png"
                  alt="arrow"
                />
                {format(date, DATE_FORMAT)}
              </p>
              <p className={styles.postTitle}>{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Blog);
