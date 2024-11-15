function toggleDropdown(targetDropdown) {
    targetDropdown.classList.toggle('hide');
}

function closeOtherEditDropdowns(activeDropdown) {
  document.querySelectorAll('.edit-btn>.dropdown').forEach(dropdown => {
    if(!(dropdown === activeDropdown)) {
      dropdown.setAttribute('class', 'dropdown hide');
    }
  });
}

export { toggleDropdown, closeOtherEditDropdowns };
