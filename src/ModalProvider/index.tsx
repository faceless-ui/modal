import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import queryString from 'qs';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import defaultClassPrefix from '../defaultClassPrefix';
import generateCSS from './css';
import ModalContext from '../ModalContext';
import { Props } from './types';

const getSearchQuery = () => {
  const query = queryString.parse(
    window.location.search,
    { ignoreQueryPrefix: true },
  );
  return query;
};

const getModalParam = () => {
  const searchQuery = getSearchQuery();
  return searchQuery.modal || '';
};

const ModalProvider: React.FC<Props> = (props) => {
  const {
    classPrefix: userClassPrefix,
    minifyCSS = true,
    generateCSS: shouldGenerateCSS = true,
    zIndex = 9999,
    handleParamChange,
    children,
    transTime = 250,
  } = props;

  const containerRef = useRef(null);
  const [currentModal, setCurrentModal] = useState('');
  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [closeOnBlur, setCloseOnBlur] = useState(false);
  const [bodyScrollIsLocked, setBodyScrollIsLocked] = useState(false);
  const [cssString, setCSSString] = useState('');
  const [classPrefix, setClassPrefix] = useState('');

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

  const bindEsc = useCallback((e) => {
    if (e.keyCode === 27) closeAll();
  }, [closeAll]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => bindEsc(e), false);
    setCurrentModal(getModalParam());
    return () => document.removeEventListener('keydown', (e) => bindEsc(e), false);
  }, [bindEsc]);

  useEffect(() => {
    let newClassPrefix = defaultClassPrefix;
    if (typeof userClassPrefix === 'string' && userClassPrefix) newClassPrefix = userClassPrefix;
    if (typeof userClassPrefix === 'boolean' && !userClassPrefix) newClassPrefix = undefined;
    setClassPrefix(newClassPrefix);
  }, [userClassPrefix]);

  useEffect(() => {
    if (shouldGenerateCSS) {
      let newString = '';
      newString = generateCSS(classPrefix, zIndex);
      if (minifyCSS) newString = newString.replace(/\n/g, '').replace(/\s\s+/g, ' ');
      setCSSString(newString);
    }
  }, [shouldGenerateCSS, minifyCSS, zIndex, classPrefix]);

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

  const toggle = useCallback((slug) => {
    if (slug === currentModal) closeAll();
    else open(slug);
  }, [closeAll, open, currentModal]);

  const setBodyScrollLock = useCallback((shouldLock, excludingRef) => {
    if (shouldLock) {
      disableBodyScroll(excludingRef.current);
      setBodyScrollIsLocked(true);
    } else {
      enableBodyScroll(excludingRef.current);
      setBodyScrollIsLocked(false);
    }
  }, []);

  const setContainerRef = useCallback((ref) => {
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
