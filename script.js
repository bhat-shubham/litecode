

const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach(faqBox => {
  faqBox.addEventListener('click', () => {
    // Toggle the active class on the current faq-box
    faqBox.classList.toggle('active');

    // Remove the active class from all other faq-boxes
    faqBoxes.forEach(otherFaqBox => {
      if (otherFaqBox !== faqBox) {
        otherFaqBox.classList.remove('active');
      }
    });

    // Scroll the previous active faq-box up
    const previouslyActiveFaqBox = Array.from(faqBoxes).find(faq => faq.classList.contains('active') && faq !== faqBox);
    if (previouslyActiveFaqBox) {
      previouslyActiveFaqBox.scrollIntoView({ behavior: 'smooth' });
    }
  });
});