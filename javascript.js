// https://codesandbox.io/p/sandbox/flexbox-square-grid-f7oq2?file=%2Findex.html 
// https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class

function createSketchGrid(horizontal, vertical){
    let sketchContainer = document.querySelector('#sketch-container');


    

    for (let h = 0; h < horizontal; h++) {
    
        let gridRowDiv = document.createElement("div");
        gridRowDiv.className = "gridRow";
        
        sketchContainer.appendChild(gridRowDiv);


        for (let v = 0; v < vertical; v++) {
            let sketchGridBox = document.createElement("div");
            let newSpan = document.createElement("span");
            sketchGridBox.appendChild(newSpan);
            sketchGridBox.className = "gridBox";
            sketchGridBox.addEventListener("mouseenter", () => {
                sketchGridBox.style.background = "blue";
            });

    //        newSpan.textContent = ("H" + h + "V" + v);

            gridRowDiv.appendChild(sketchGridBox);
        }
    }






}   


createSketchGrid(64,64);

