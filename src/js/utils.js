import { DESKTOP_BREAKPOINT } from './const';

const html = document.documentElement;
const body = document.body;

const isDesktop = () => {
  return window.innerWidth >= DESKTOP_BREAKPOINT;
};

const getScrollbarWidth = () => {
  return window.innerWidth - html.clientWidth;
};

const addPageOverflow = () => {
  body.style.overflowY = 'scroll';
  body.style.top = '-' + window.scrollY + 'px';
  body.style.position = 'fixed';
};

const removePageOverflow = () => {
  const scrollY = parseInt(body.style.top || '0', 10);
  body.style.overflowY = '';
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, scrollY * -1);
};

export { isDesktop, getScrollbarWidth, addPageOverflow, removePageOverflow };
