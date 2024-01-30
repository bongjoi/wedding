import { useState } from 'react';
import classNames from 'classnames/bind';

import Section from '@shared/Section';
import ImageViewer from '../ImageViewer';

import styles from './ImageGallery.module.scss';

const cx = classNames.bind(styles);

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;

  const handleSelectImage = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(-1);
  };

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => handleSelectImage(idx)}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  );
}

export default ImageGallery;
