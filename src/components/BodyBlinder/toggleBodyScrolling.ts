export function isBodyScroll(isOn: boolean) {
  togglePaddingToAllBodyChildren(!isOn);
  document.body.style.overflow = isOn ? '' : 'hidden';
}

function togglePaddingToAllBodyChildren(isPadding: boolean) {
  const scrollBarWidth = calculateScrollBarWidth();
  const rootElem = document.getElementById('root');
  if (!rootElem) return;
  rootElem.style.paddingRight = isPadding ? `${scrollBarWidth}px` : '';
}

function calculateScrollBarWidth() {
  let scrollBarWidth = Number(sessionStorage.getItem('scrollBarWidth'));
  if (scrollBarWidth) return scrollBarWidth;
  scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  sessionStorage.setItem('scrollBarWidth', `${scrollBarWidth}`);
  return scrollBarWidth;
}
