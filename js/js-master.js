document.addEventListener("DOMContentLoaded", function() {
    let themeSwitch = document.getElementById("themeSwitch");
    let cards = document.querySelectorAll(".content");
    let acaTable = document.getElementById("acaTable");

    themeSwitch.addEventListener("change", toggleTheme);

    function toggleTheme() {
        if (themeSwitch.checked) {
            document.body.classList.remove("bg-black", "text-white");
            document.body.classList.add("bg-light", "text-black");
            cards.forEach(card => {
                card.classList.remove("bg-dark", "text-white");
                card.classList.add("bg-white", "text-black");
            });
            acaTable.classList.remove("table-dark", "border-white");
            acaTable.classList.add("table-light", "border-black");
        } else {
            document.body.classList.remove("bg-light", "text-black");
            document.body.classList.add("bg-black", "text-white");
            cards.forEach(card => {
                card.classList.remove("bg-white", "text-black");
                card.classList.add("bg-dark", "text-white");
            });
            acaTable.classList.remove("table-light", "border-black");
            acaTable.classList.add("table-dark", "border-white");
        }
    }

    // Typewriter effect with continuous loop
    let nameElement = document.querySelector(".intro-card h1");
    let fullName = "BIKASH KUMAR DAS";
    let currentIndex = 0;

    function typeWriter() {
        if (currentIndex < fullName.length) {
            nameElement.textContent += fullName.charAt(currentIndex);
            currentIndex++;
        } else {
            currentIndex = 0;
            nameElement.textContent = "";
        }
        setTimeout(typeWriter, 185); // Adjust the speed here (in milliseconds)
    }

    // Start the typewriter effect
    typeWriter();
});
