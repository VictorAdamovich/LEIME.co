import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from 'components';
import { ImageType } from 'types';

import styles from './styles.module.scss';

type LogoType = {
  mainIcon: ImageType;
  logoTitleIcon: ImageType;
  logoDescription: string;
};

type Props = {
  socialLinks: (ImageType & { href: string })[];
  logo: LogoType;
};

function Info({ logo, socialLinks }: Props) {
  return (
    <div className={styles.info}>
      <Logo {...logo} className={styles.logo} />

      <div className={styles.contactsWrapper}>
        <div className={styles.address}>
          <p className={styles.title}>Address:</p>
          <p>28 Jackson Btvd Ste</p>
          <p>1020 Chicago</p>
          <p>IL 60604-2340</p>
        </div>
        <div className={styles.contacts}>
          <p className={styles.title}>Phone:</p>
          <Link href="tel:800-2345-6789">800-2345-6789</Link>
          <p className={styles.title}>E-Mail:</p>
          <Link href="mailto:info@demolink.org">info@demolink.org</Link>
        </div>
      </div>
      <div className={styles.social}>
        {socialLinks.map((link) => (
          <Link key={link.src} href={link.href} target="blanc" rel="noopener">
            <Image
              className={styles.socialIcon}
              width={link.width}
              height={link.height}
              src={link.src}
              alt={link.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(Info);
