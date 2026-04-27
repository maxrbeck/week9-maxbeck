/* --- Menu & Special Logic --- */

// 1. Our Data
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

// 2. Select the elements we need to talk to
const menuList = document.getElementById("menu-list");
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

// 3. Automatically fill the menu list on page load
menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
});

// 4. Handle the button click for the Daily Special
button.addEventListener("click", () => {
    // Generate a random index based on the length of our array
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const randomItem = menuItems[randomIndex];
    
    // Update the UI with the result
    display.textContent = `Today's Special: ${randomItem}`;
});