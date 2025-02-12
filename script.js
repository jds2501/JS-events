

document.addEventListener("DOMContentLoaded", (event) => {
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");

    let boxColor = "black";
    let boxIDCounter = 0;

    colorForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const boxes = document.getElementsByClassName("box");

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = colorInput.value;
        }

        boxColor = colorInput.value;
        colorInput.value = "";
    });

    function addBox() {
        boxIDCounter++;

        const newBox = document.createElement("div");
        newBox.id = "box-" + boxIDCounter.toString();
        newBox.classList.add("box");
        newBox.style.backgroundColor = boxColor;
        newBox.textContent = newBox.id;

        boxContainer.appendChild(newBox);
    }

    newBoxButton.addEventListener("click", addBox);

    document.addEventListener("dblclick", event => {
        if (event.target.classList.contains("box")) {
            event.target.remove();
        }
    });

    document.addEventListener("mouseover", event => {
        if (event.target.classList.contains("box")) {
            const rect = event.target.getBoundingClientRect();
            event.target.textContent = `x: ${rect.x} y: ${rect.y}`;
        }
    });

    document.addEventListener("mouseout", event => {
        if (event.target.classList.contains("box")) {
            event.target.textContent = event.target.id;
        }
    });

    document.addEventListener("keypress", event => {
        if (event.target.id !== "color-input" && (event.key.toLowerCase() === "n")) {
            addBox();
        }
    });
});