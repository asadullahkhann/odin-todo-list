function toggleDropdown(targetDropdown) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if(!(dropdown === targetDropdown)) {
        dropdown.setAttribute('class', 'dropdown hide');
      }
    });
    targetDropdown.classList.toggle('hide');
}

export { toggleDropdown };
