document.addEventListener("DOMContentLoaded", function() {
    let currentCardIndex = 0;

    const cards = document.querySelectorAll(".card");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    function updateCardVisibility() {
        cards.forEach((card, index) => {
            card.style.display = index === currentCardIndex ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", function() {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        updateCardVisibility();
    });

    nextButton.addEventListener("click", function() {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        updateCardVisibility();
    });

    updateCardVisibility();
});
