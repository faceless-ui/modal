import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import queryString from 'qs';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import generateCSS from './generateCSS';
import ModalContext from './context';

interface IHandleParamChangeCallback {
  key: string,
  value: string
}

export type ModalProviderProps = {
  generateCSS?: boolean
  minifyCSS?: boolean
  classPrefix?: string
  handleParamChange?: (callbackArgs: IHandleParamChangeCallback) => void | boolean // eslint-disable-line
  transTime?: number
  zIndex?: number
  children?: React.ReactNode
}

const getSearchQuery = () => {
  const query = queryString.parse(
    window.location.search,
    { ignoreQueryPrefix: true },
  );
  return query;
};

const getModalParam = (): string => {
  const searchQuery = getSearchQuery();
  return searchQuery.modal as string || '';
};

const ModalProvider: React.FC<ModalProviderProps> = (props) => {
  const {
    classPrefix,
    minifyCSS = true,
    generateCSS: shouldGenerateCSS = true,
    zIndex = 9999,
    handleParamChange,
    children,
    transTime = 250,
  } = props;

  const containerRef = useRef<HTMLElement | null>(null);
  const [currentModal, setCurrentModal] = useState('');
  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [closeOnBlur, setCloseOnBlur] = useState(false);
  const [bodyScrollIsLocked, setBodyScrollIsLocked] = useState(false);
  const [cssString, setCSSString] = useState('');

  const closeAll = useCallback((updateHistory = true) => {
    if (updateHistory) {
      if (typeof handleParamChange === 'function') {
        handleParamChange({
          key: 'modal',
          value: '',
        });
      }

      if (typeof handleParamChange === 'boolean' && handleParamChange) {
        const searchQuery = getSearchQuery();
        delete searchQuery.modal;
        const queryWithoutModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
        const newURL = `${window.location.pathname}${queryWithoutModal}`;
        window.history.pushState({}, '', newURL);
      }
    }

    clearAllBodyScrollLocks();

    setCurrentModal('');
    setOneIsOpen(false);
  }, [handleParamChange]);

  const bindEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) closeAll();
  }, [closeAll]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => bindEsc(e), false);
    setCurrentModal(getModalParam());
    return () => document.removeEventListener('keydown', (e) => bindEsc(e), false);
  }, [bindEsc]);

  useEffect(() => {
    if (shouldGenerateCSS) {
      let newString = '';
      newString = generateCSS({
        classPrefix,
        zIndex
      });

      if (minifyCSS) newString = newString.replace(/\n/g, '').replace(/\s\s+/g, ' ');
      setCSSString(newString);
    }
  }, [
    shouldGenerateCSS,
    minifyCSS,
    zIndex,
    classPrefix
  ]);

  const open = useCallback((slug: string, skipParamChange?: boolean) => {
    if (!skipParamChange) {
      if (typeof handleParamChange === 'function') {
        handleParamChange({
          key: 'modal',
          value: slug,
        });
      }

      if (typeof handleParamChange === 'boolean' && handleParamChange) {
        const searchQuery = getSearchQuery();
        searchQuery.modal = slug;
        const queryWithModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
        const newURL = `${window.location.pathname}${queryWithModal}`;
        window.history.pushState({}, '', newURL);
      }
    }

    setCurrentModal(slug);
    setOneIsOpen(true);
  }, [handleParamChange]);

  const toggle = useCallback((slug: string) => {
    if (slug === currentModal) closeAll();
    else open(slug);
  }, [closeAll, open, currentModal]);

  const setBodyScrollLock = useCallback((shouldLock: boolean, excludingRef: React.RefObject<HTMLElement>) => {
    if (excludingRef?.current) {
      if (shouldLock) {
        disableBodyScroll(excludingRef.current);
        setBodyScrollIsLocked(true);
      } else {
        enableBodyScroll(excludingRef.current);
        setBodyScrollIsLocked(false);
      }
    }
  }, []);

  const setContainerRef = useCallback((ref: HTMLElement) => {
    containerRef.current = ref;
  }, []);

  const inheritedProps = { ...props };
  delete inheritedProps.children;

  return (
    <Fragment>
      {shouldGenerateCSS && <style dangerouslySetInnerHTML={{ __html: cssString }} />}
      <ModalContext.Provider
        value={{
          // props
          ...inheritedProps,
          transTime,
          // state
          containerRef,
          currentModal,
          oneIsOpen,
          closeOnBlur,
          bodyScrollIsLocked,
          classPrefix,
          // methods
          closeAll,
          setCloseOnBlur,
          open,
          toggle,
          setContainerRef,
          setBodyScrollLock,
        }}
      >
        {children && children}
      </ModalContext.Provider>
    </Fragment>
  );
};

export default ModalProvider;
