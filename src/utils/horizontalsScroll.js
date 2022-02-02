export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id 
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);
  if (scrollWrapper) {
    if (activeTapId > 2) {
      const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
      const leftScrollValue = ((activeTapId - 1.5) * elementWidth)
      if (false) {
        scrollWrapper.scrollLeft = Number(leftScrollValue);
      } else {
        let leftScrollValueAmount = Number(leftScrollValue);
        const myInterval = setInterval(() => {
          const scrolledValue = leftScrollValueAmount / 4
          scrollWrapper.scrollLeft += scrolledValue
          leftScrollValueAmount = leftScrollValueAmount - scrolledValue
          if (leftScrollValueAmount < 1) {
            clearInterval(myInterval);
          }
        }, 20);
      }
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}