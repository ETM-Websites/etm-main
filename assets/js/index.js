// Function to check if a 
function checkHiddenSummaries() {
  document.querySelectorAll('summary').forEach((el) => {
    // get computed styles of <summary>
    const computedStyles = window.getComputedStyle(el);
    // expand <details> if <summary> is hidden
    if (computedStyles.display === 'none') {
      el.parentElement.setAttribute('open', '');
      return;
    }

    // ensure <details> collapses when resized & not active
    if (!el.parentElement.contains(document.activeElement)) {
      el.parentElement.removeAttribute('open');
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

// Run summary 
checkHiddenSummaries();