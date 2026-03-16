// https://codesandbox.io/p/sandbox/flexbox-square-grid-f7oq2?file=%2Findex.html 
// https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class

const clearButton = document.querySelector("#clear-button");
const sketchContainer = document.querySelector("#sketch-container");
const horizontalSizeInput = document.querySelector("#horizontalSizeInput");
const horizontalSizeLabel = document.querySelector(".input-container-horizontal label");
const verticalSizeInput = document.querySelector("#verticalSizeInput");
const verticalSizeLabel = document.querySelector(".input-container-vertical label");
let horizontalSize = 16;
let verticalSize = 16;

clearButton.addEventListener("click", () => {
    deleteSketchGrid();
    createSketchGrid(verticalSize,horizontalSize);
});

horizontalSizeInput.addEventListener("input", (e) => {
    horizontalSize = e.target.value;
    horizontalSizeLabel.textContent = `${horizontalSize} across`;
});

verticalSizeInput.addEventListener("input", (e) => {
    verticalSize = e.target.value;
    verticalSizeLabel.textContent = `${verticalSize} down`;
});



function deleteSketchGrid(){
    sketchContainer.innerHTML = '';
  }


function createSketchGrid(horizontal, vertical){

    for (let h = 0; h < horizontal; h++) {
    
        let gridRowDiv = document.createElement("div");
        gridRowDiv.className = "gridRow";
        
        sketchContainer.appendChild(gridRowDiv);


        for (let v = 0; v < vertical; v++) {
            let sketchGridBox = document.createElement("div");
            let newSpan = document.createElement("span");
            sketchGridBox.appendChild(newSpan);
            sketchGridBox.className = "gridBox";
            sketchGridBox.style.backgroundColor = "rgb(255, 255, 255)";
            sketchGridBox.style.opacity = "1";
            sketchGridBox.InitialBackgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
            sketchGridBox.InitialBackgroundOpacity = 0.1;
            sketchGridBox.addEventListener("mouseenter", () => {
 //               let bgColor = "rgb(255, 255, 255)";
 //               let opacity = 1.0;
                sketchGridBox.style.backgroundColor = sketchGridBox.InitialBackgroundColor;
                sketchGridBox.style.opacity = sketchGridBox.InitialBackgroundOpacity;
                sketchGridBox.InitialBackgroundOpacity = sketchGridBox.InitialBackgroundOpacity + 0.1;
                

            });


            gridRowDiv.appendChild(sketchGridBox);
        }
    }

}   

function generateRandomColor() {
    return Math.floor(Math.random() * 255 + 1);
  }



  createSketchGrid(verticalSize,horizontalSize);

