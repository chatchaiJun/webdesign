// Get all the specialty_card elements
const specialtyCards = document.querySelectorAll(".specialty_card");

// Loop through each specialty_card and swap the positions of specialty_content and img if the row is odd
specialtyCards.forEach((card, index) => {
  if (index % 2 !== 0) {
    // Check if the row is odd (index is zero-based)
    const container = card.querySelector(".specialty_container");
    const content = card.querySelector(".specialty_content");
    const img = card.querySelector(".specialty_img");

    // Swap the positions
    container.insertBefore(img, content);
  }
});
