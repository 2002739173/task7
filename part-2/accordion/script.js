// script.js
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        const accordionContent = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            arrow.classList.remove('rotated');
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null; // Close all open items
                item.previousElementSibling.querySelector('.arrow').classList.remove('rotated');
            });
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            arrow.classList.add('rotated');
        } 
    });
});