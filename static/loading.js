document.addEventListener("DOMContentLoaded", () => {
    const textEl = document.querySelector(".loading-text");
    const text = textEl.textContent;
    textEl.textContent = "";

    let index = 0;
    const interval = 2000 / text.length; // 3 секунди на весь текст

    const timer = setInterval(() => {
        textEl.innerHTML = 
            `<span class="loaded">${text.substring(0, index + 1)}</span>` +
            `<span class="unloaded">${text.substring(index + 1)}</span>`;
        index++;
        if (index === text.length) {
            clearInterval(timer);
            setTimeout(() => {
                textEl.classList.add("fade-out");
                setTimeout(() => {
                    textEl.style.display = "none";
                }, 1000); // Час збігається з transition у CSS
            }, 500); // Пауза перед зникненням
        }
    }, interval);
});