import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from 'react';
import queryString from 'qs';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import generateCSS from './generateCSS';
import ModalContext, { ModalState } from './context';
import reducer from './reducer';

export type ModalProviderProps = {
  generateCSS?: boolean
  minifyCSS?: boolean
  classPrefix?: string
  handleParamChange?: (modalState: ModalState) => void | boolean // eslint-disable-line
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

const getModalParamArray = (): string[] => {
  const searchQuery = getSearchQuery();
  let params: string[] = [];
  if (typeof searchQuery.modal === 'string') {
    params = [searchQuery.modal];
  } else if (Array.isArray(searchQuery.modal)) {
    params = searchQuery.modal as string[];
  }
  return params;
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
  const [modalState, dispatchModalState] = useReducer(reducer, {}, () => {
    const initialParams = getModalParamArray();
    const initialState = initialParams.reduce((acc, param) => {
      acc[param] = {
        slug: param,
        isOpen: true,
      };
      return acc;
    }, {} as ModalState);
    return initialState;
  });

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [closeOnBlur, setCloseOnBlur] = useState(false);
  const [bodyScrollIsLocked, setBodyScrollIsLocked] = useState(false);
  const [cssString, setCSSString] = useState('');

  const bindEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      dispatchModalState({
        type: 'CLOSE_ALL_MODALS',
      })
    }
  }, []);

  // Bind esc key to close all modals
  useEffect(() => {
    document.addEventListener('keydown', (e) => bindEsc(e), false);
    return () => document.removeEventListener('keydown', (e) => bindEsc(e), false);
  }, [bindEsc]);

  // Generate CSS to inject into stylesheet
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

  // Handle param changes
  useEffect(() => {
    if (typeof handleParamChange === 'function') {
      handleParamChange(modalState);
    }

    if (typeof handleParamChange === 'boolean' && handleParamChange) {
      const openModals = Object.keys(modalState).filter((slug) => modalState[slug].isOpen);
      const queryWithModal = queryString.stringify({
        modal: openModals
      }, {
        addQueryPrefix: true,
        encode: false,
      });
      const newURL = `${window.location.pathname}${queryWithModal}`;
      window.history.pushState({}, '', newURL);
    }
  }, [
    modalState,
    handleParamChange,
  ])

  // Determine if any modals are open
  useEffect(() => {
    const isOneOpen = Object.keys(modalState).some((key) => modalState[key].isOpen);
    setOneIsOpen(isOneOpen);
  }, [modalState])

  const setBodyScrollLock = useCallback((shouldLock: boolean, excludingRef: HTMLElement) => {
    if (excludingRef) {
      if (shouldLock) {
        disableBodyScroll(excludingRef);
        setBodyScrollIsLocked(true);
      } else {
        enableBodyScroll(excludingRef);
        setBodyScrollIsLocked(false);
      }
    }
  }, []);

  const setContainerRef = useCallback((ref: HTMLElement) => {
    containerRef.current = ref;
  }, []);

  const openModal = useCallback((slug: string) => {
    dispatchModalState({
      type: 'OPEN_MODAL',
      payload: {
        slug,
      }
    })
  }, [])

  const closeModal = useCallback((slug: string) => {
    dispatchModalState({
      type: 'CLOSE_MODAL',
      payload: {
        slug,
      }
    })
  }, [])

  const closeAllModals = useCallback(() => {
    dispatchModalState({
      type: 'CLOSE_ALL_MODALS'
    })
  }, [])

  const toggleModal = useCallback((slug: string) => {
    dispatchModalState({
      type: 'TOGGLE_MODAL',
      payload: {
        slug,
      }
    })
  }, [])

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
          modalState,
          modalIsOpen: oneIsOpen,
          closeOnBlur,
          bodyScrollIsLocked,
          classPrefix,
          // methods
          closeAllModals,
          setCloseOnBlur,
          openModal,
          closeModal,
          toggleModal,
          setBodyScrollLock,
          setContainerRef,
        }}
      >
        {children}
      </ModalContext.Provider>
    </Fragment>
  );
};

export default ModalProvider;
