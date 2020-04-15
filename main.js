const gridBlockTarget = document.querySelector("#grid");
const newGridTextInput = document.querySelector("#newGridTextInput");

const view = {
    displayGrid: function (gridAmount, gridSize) {
        for (let i = 1; i <= gridAmount; i++) {
            const gridBlock = document.createElement("DIV");
            gridBlock.classList.add("grid-block");
            gridBlock.style.width = `${gridSize}%`;
            gridBlock.style.height = `${gridSize}%`;

            document.getElementById("grid").appendChild(gridBlock);
        }
    },
};

const handlers = {
    newGrid: function () {
        let gridAmount = newGridTextInput.value * newGridTextInput.value;
        let gridSize = 100 / newGridTextInput.value;
        gridBlockTarget.innerHTML = "";
        view.displayGrid(gridAmount, gridSize);
        newGridTextInput.value = "";
    },
    resetGrid: function () {},
};

// Reset Button
// Change color selection. radio buttons?

//             const cursor = {
//               colorBlack: function () {
//                 return "#000000";
//               },
//               colorRandom: function () {
//                 const randomColor = Math.floor(Math.random()*16777215).toString(16);
//                 return "#" + randomColor;
// }
//             }

gridBlockTarget.addEventListener("mouseover", (e) => {
    const activeBlock = e.target;
    e.target.style.backgroundColor = "#000000";
});

// colorCheckbox.addEventListener('change', (e) => {
//   const isChecked = e.target.checked;
//   const lis = ul.children;
//   if (isChecked) {

view.displayGrid(100, 10);
