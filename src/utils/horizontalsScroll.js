export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex || array?.filter((item) => (item.path === currentPath))?.[0]?.id || array?.filter((item) => (item.subPath === currentPath))?.[0]?.id || array?.filter((item) => (item.subPath2 === currentPath))?.[0]?.id || array?.filter((item) => (item.subPath3 === currentPath))?.[0]?.id || array?.filter((item) => (item.subPath4 === currentPath))?.[0]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);
  if (!window.prevActiveTapId) {
    window.prevActiveTapId = activeTapId
  }
  if (scrollWrapper) {
    if (activeTapId > 2) {
      const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
      const leftScrollValue = ((activeTapId - 1.5) * elementWidth)
      if ('scroll-behavior' in document.documentElement.style) {
        scrollWrapper.scrollLeft = Number(leftScrollValue);
      } else {
        let leftScrollValueAmount = Number(leftScrollValue);
        const myInterval = setInterval(() => {
          const scrolledValue = leftScrollValueAmount / 4
          if (window.prevActiveTapId < activeTapId || window.prevActiveTapId === activeTapId) {
            scrollWrapper.scrollLeft += scrolledValue
          } else {
            scrollWrapper.scrollLeft -= scrolledValue
          }
          leftScrollValueAmount = leftScrollValueAmount - scrolledValue
          if (leftScrollValueAmount < 1) {
            window.prevActiveTapId = activeTapId
            clearInterval(myInterval);
          }
        }, 16);
      }
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}