import React from 'react';
import PropTypes from 'prop-types';
import withModalContext from '../withModalContext';

const ModalToggler = (props) => {
  const {
    id,
    className,
    modal: {
      currentModal,
      toggle,
      classPrefix,
    },
    slug,
    style,
    htmlElement: HtmlElement,
    htmlAttributes,
    children,
  } = props;

  const baseClass = `${classPrefix}__modal-toggler`;

  const classes = [
    baseClass,
    `${baseClass}--slug-${slug}`,
    currentModal === slug && `${baseClass}--slug-${slug}--is-open`,
    className,
    htmlAttributes.className,
  ].filter(Boolean).join(' ');

  const strippedHtmlAttributes = { ...htmlAttributes };
  delete strippedHtmlAttributes.id;
  delete strippedHtmlAttributes.className;
  delete strippedHtmlAttributes.style;

  return (
    <HtmlElement
      id={id || htmlAttributes.id}
      className={classes}
      onClick={() => toggle(slug)}
      style={{
        ...htmlAttributes.style,
        ...style,
      }}
      {...strippedHtmlAttributes}
    >
      {children}
    </HtmlElement>
  );
};

ModalToggler.defaultProps = {
  id: '',
  className: '',
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
};

ModalToggler.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  modal: PropTypes.shape({
    currentModal: PropTypes.string,
    toggle: PropTypes.func,
    classPrefix: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'footer',
    'header',
    'main',
    'nav',
    'section',
    'span',
    'ul',
    'li',
    'button',
  ]),
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

export default withModalContext(ModalToggler);
