export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id 
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);
  if (scrollWrapper) {
    if (activeTapId > 2) {
      const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
      const leftScrollValue = ((activeTapId - 1.5) * elementWidth)
      if ('scroll-behavior' in document.documentElement.style) {
        scrollWrapper.scrollLeft = Number(leftScrollValue);
      } else {
        let leftScrollValueAmount = Number(leftScrollValue);
        const myInterval = setInterval(() => {
          const scrolledValue = leftScrollValueAmount / 20
          scrollWrapper.scrollLeft += scrolledValue
          leftScrollValueAmount = leftScrollValueAmount - scrolledValue
          if (leftScrollValueAmount < 1) {
            clearInterval(myInterval);
          }
        }, 15);
      }
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}