import React, { memo, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

function PageWrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default memo(PageWrapper);
