class Carousel {
  constructor(carouselId, prevBtnClass, nextBtnClass, cardClass, visibleCards = 3) {
    this.carousel = document.getElementById(carouselId);
    this.prevBtn = document.querySelector(prevBtnClass);
    this.nextBtn = document.querySelector(nextBtnClass);
    this.cards = document.querySelectorAll(cardClass);
    this.cardWidth = this.cards[0].offsetWidth + 20; // Card width including margin
    this.totalCards = this.cards.length;
    this.visibleCards = visibleCards;
    this.scrollPosition = this.cardWidth * this.visibleCards; // Start at first real card
    this.autoScroll = null;

    // Set initial position
    this.carousel.style.transform = `translateX(-${this.scrollPosition}px)`;

    this.nextBtn.addEventListener("click", () => {
      this.nextSlide();
      this.stopAutoScroll();
    });

    this.prevBtn.addEventListener("click", () => {
      this.prevSlide();
      this.stopAutoScroll();
    });

    this.startAutoScroll(); // Start auto-scrolling
  }

  updateCarousel() {
    this.carousel.style.transition = "transform 0.5s ease-in-out";
    this.carousel.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  nextSlide() {
    if (this.scrollPosition < this.cardWidth * (this.totalCards - this.visibleCards)) {
      this.scrollPosition += this.cardWidth;
    } else {
      this.scrollPosition += this.cardWidth;
      this.updateCarousel();
      setTimeout(() => {
        this.scrollPosition = this.cardWidth * this.visibleCards + this.cardWidth; // Reset to first real card
        this.carousel.style.transition = "none";
        this.carousel.style.transform = `translateX(-${this.scrollPosition}px)`;
      }, 500);
      return;
    }
    this.updateCarousel();
  }

  prevSlide() {
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.cardWidth;
    }
    if (this.scrollPosition <= 0) {
      this.scrollPosition -= this.cardWidth;
      this.updateCarousel();
      setTimeout(() => {
        this.scrollPosition = this.cardWidth * (this.totalCards - this.visibleCards * 2); // Reset to last real card
        this.carousel.style.transition = "none";
        this.carousel.style.transform = `translateX(-${this.scrollPosition}px)`;
      }, 500);
      return;
    }
    this.updateCarousel();
  }

  startAutoScroll() {
    this.autoScroll = setInterval(() => this.nextSlide(), 3000);
  }

  stopAutoScroll() {
    clearInterval(this.autoScroll);
    this.startAutoScroll(); // Restart auto-scroll after interaction
  }
}

// Usage
const carousel = new Carousel("carousel", ".prev", ".next", ".carousel-card");
