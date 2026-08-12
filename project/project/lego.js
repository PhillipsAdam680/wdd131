

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close Navigation");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open Navigation");
        }
    });
}


// ========================================
// CURRENT YEAR
// ========================================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// LAST MODIFIED DATE
// ========================================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// ========================================
// THEME OF THE MONTH
// ========================================

const themeDisplay = document.querySelector("#theme-display");

const themes = [
    {
        name: "Star Wars",
        description:
            "Build iconic starships, vehicles, locations, and characters from the Star Wars galaxy."
    },
    {
        name: "Ninjago",
        description:
            "Explore the world of ninja heroes, dragons, vehicles, temples, and exciting adventures."
    },
    {
        name: "City",
        description:
            "Create your own LEGO city with buildings, emergency vehicles, trains, and everyday adventures."
    },
    {
        name: "Technic",
        description:
            "Discover realistic engineering with gears, moving parts, suspension systems, and detailed vehicles."
    },
    {
        name: "Minecraft",
        description:
            "Bring the Minecraft world into LEGO with familiar characters, creatures, environments, and builds."
    },
    {
        name: "Icons",
        description:
            "Enjoy detailed display models designed for builders and collectors who enjoy challenging builds."
    }
];

if (themeDisplay) {

    const currentMonth = new Date().getMonth();

    const selectedTheme = themes[currentMonth % themes.length];

    themeDisplay.innerHTML = `
        <strong>${selectedTheme.name}</strong>
        <br>
        ${selectedTheme.description}
    `;
}

