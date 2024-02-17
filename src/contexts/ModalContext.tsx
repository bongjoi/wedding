import { createContext, useContext, ComponentProps, useState } from 'react';
import { createPortal } from 'react-dom';

import Modal from '@shared/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface ModalContextValue {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const defaultValues = {
  open: false,
  body: null,
  onClickLeftButton: () => {},
  onClickRightButton: () => {}
};

export function ModalContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);

  const $portal_root = document.getElementById('root-portal');

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };

  const close = () => {
    setModalState(defaultValues);
  };

  const values = {
    open,
    close
  };

  return (
    <ModalContext.Provider value={values}>
      {children}
      {$portal_root
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const values = useContext(ModalContext);

  if (values === undefined) {
    throw new Error('Modal Context 안에서 사용해주세요');
  }

  return values;
}
