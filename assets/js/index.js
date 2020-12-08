function checkHiddenSummaries() {
  document.querySelectorAll('summary').forEach((el) => {
    const computedStyles = window.getComputedStyle(el);
    const details = el.parentElement;
    if (computedStyles.display === 'none') {
      details.setAttribute('open', '');
    } else {
      if (!details.contains(document.activeElement)) {
        details.removeAttribute('open');
      }
    }
  });
}

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    // allow window to process styles before triggering check
    // otherwise, mobile safari will load an expanded menu most of the time
    window.requestAnimationFrame(checkHiddenSummaries);
  }
});

window.onresize = checkHiddenSummaries;