export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);

  if (scrollWrapper) {
    if (activeTapId > 2) {
      setTimeout(() => {
        const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
        const leftScrollValue = ((activeTapId - 1.5) * elementWidth)
        window.uss.scrollXTo(leftScrollValue, scrollWrapper)
      }, 0)
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}
