const initVerticalSlider = () => {
    const imageList = document.querySelector(".vertical-slider-wrapper .vertical-image-list");
    const slideButtons = document.querySelectorAll(".vertical-slider-wrapper .vertical-slide-button");
    const maxScrollTop = imageList.scrollHeight - imageList.clientHeight;
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "vertical-prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientHeight / 3 * direction; // Adjusted for 3 items per view
            imageList.scrollBy({ top: scrollAmount, behavior: "smooth" });
        });
    });
    
    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollTop <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollTop >= maxScrollTop ? "none" : "flex";
    }
    
    // Call handleSlideButtons on scroll
    imageList.addEventListener("scroll", handleSlideButtons);
    
    // Initial call to set button visibility on load
    handleSlideButtons();
}

window.addEventListener("resize", initVerticalSlider);
window.addEventListener("load", initVerticalSlider);

// Sự kiện trong năm 2024
const initNewVerticalSlider = () => {
    const newImageList = document.querySelector(".new-vertical-slider-wrapper .new-vertical-image-list");
    const newSlideButtons = document.querySelectorAll(".new-vertical-slider-wrapper .new-vertical-slide-button");
    const newMaxScrollTop = newImageList.scrollHeight - newImageList.clientHeight;
    
    // Slide images according to the slide button clicks
    newSlideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "new-vertical-prev-slide" ? -1 : 1;
            const scrollAmount = newImageList.clientHeight / 3 * direction; // Adjusted for 3 items per view
            newImageList.scrollBy({ top: scrollAmount, behavior: "smooth" });
        });
    });
    
    // Show or hide slide buttons based on scroll position
    const handleNewSlideButtons = () => {
        newSlideButtons[0].style.display = newImageList.scrollTop <= 0 ? "none" : "flex";
        newSlideButtons[1].style.display = newImageList.scrollTop >= newMaxScrollTop ? "none" : "flex";
    }
    
    // Call handleNewSlideButtons on scroll
    newImageList.addEventListener("scroll", handleNewSlideButtons);
    
    // Initial call to set button visibility on load
    handleNewSlideButtons();
}

window.addEventListener("resize", initNewVerticalSlider);
window.addEventListener("load", initNewVerticalSlider);
