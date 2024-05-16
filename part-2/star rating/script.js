// script.js
function setRating(event) {
  const stars = document.querySelectorAll('.star');
  const ratingValue = event.target.dataset.value;
  let ratingText = '';

  stars.forEach(star => {
      if (star.dataset.value <= ratingValue) {
          star.style.color = '#ffdd55'; // Gold color for active stars
      } else {
          star.style.color = '#ccc'; // Gray color for inactive stars
      }
  });

  // Change rating text based on the number of stars
  switch (ratingValue) {
      case '1':
          ratingText = 'Poor';
          break;
      case '2':
          ratingText = 'Fair';
          break;
      case '3':
          ratingText = 'Good';
          break;
      case '4':
          ratingText = 'Very Good';
          break;
      case '5':
          ratingText = 'Excellent';
          break;
      default:
          ratingText = 'It is awesome'; // Default text or clear text
  }

  document.querySelector('.rating-text').textContent = ratingText;
}