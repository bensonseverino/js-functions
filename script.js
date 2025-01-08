document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add event listener to the button
  changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
