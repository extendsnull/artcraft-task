const contentSections = document.querySelectorAll('.content-section');

contentSections.forEach(section => {
  const toggler = section.querySelector('.content-section__toggler');
  const body = section.querySelector('.content-section__body');

  toggler.addEventListener('click', evt => {
    evt.preventDefault();
    toggler.classList.toggle('content-section__toggler--active');
    body.classList.toggle('content-section__body--hidden');

    const swapText = toggler.firstElementChild.textContent;
    const labelAlt = toggler.dataset.labelAlt;
    toggler.firstElementChild.textContent = labelAlt;
    toggler.title = labelAlt;
    toggler.dataset.labelAlt = swapText;
  });
});
