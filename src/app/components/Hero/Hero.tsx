'use client';

import React, { memo, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import { IconButton } from '@mui/material';
import clsx from 'clsx';

import { SLIDER } from './content';
import styles from './styles.module.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);

          if (mouseOver) return;

          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <div className={styles.wrapper}>
      <div ref={sliderRef} className="keen-slider">
        {SLIDER.map((slide) => (
          <div
            key={slide.title}
            className={clsx('keen-slider__slide', styles.slide)}
            style={{ backgroundImage: `url(${slide.src})` }}
          >
            {slide.title}
          </div>
        ))}
      </div>

      {loaded && instanceRef?.current && (
        <>
          <IconButton
            className={styles.left}
            type="button"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            className={styles.right}
            type="button"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <ArrowForwardIcon />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default memo(Hero);
