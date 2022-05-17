export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);
  const animationDuration = 150
  const myCustomEase = window.EASE_IN_OUT_QUINT(animationDuration) 

  if (scrollWrapper) {
    if (activeTapId > 2) {
      setTimeout(() => {
        const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
        const leftScrollValue = ((activeTapId - 1.5) * elementWidth)
        if (window.innerWidth > 767 || window.innerWidth < 1200) {
          window.uss.setXStepLengthCalculator(myCustomEase, scrollWrapper)
        }
        window.uss.scrollXTo(leftScrollValue, scrollWrapper)
      }, 0)
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}
