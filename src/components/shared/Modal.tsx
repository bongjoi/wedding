import classNames from 'classnames/bind';
import Dimmed from './Dimmed';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  leftButtonLabel?: string;
  onClickLeftButton: () => void;
  rightButtonLabel?: string;
  onClickRightButton: () => void;
}

function Modal({
  open,
  title,
  body,
  leftButtonLabel = '닫기',
  rightButtonLabel = '확인',
  onClickLeftButton,
  onClickRightButton
}: ModalProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title ? <div className={cx('txt-title')}>{title}</div> : null}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onClickLeftButton}>{leftButtonLabel}</button>
            <button onClick={onClickRightButton}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  );
}

export default Modal;
