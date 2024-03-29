
const container = document.querySelector("#container");
let mouseDown = false;

function drawCanvas(dim){
    const fixHeigh = 960/dim;
    for(i = 0; i < dim ; i++){
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class" , "rowContainer");
        rowContainer.setAttribute("id", "row" + i);
        for(j = 0; j < dim; j ++){
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute('class', "square");
            squareDiv.setAttribute('id', "grid" +i+ j);
            squareDiv.setAttribute("style", `width:${fixHeigh}px;`)
    
            rowContainer.appendChild(squareDiv)
        }
        container.appendChild(rowContainer)
    }
}

for(i = 0; i < 16 ; i++){
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class" , "rowContainer");
    rowContainer.setAttribute("id", "row" + i);
    for(j = 0; j < 16; j ++){
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute('class', "square");
        squareDiv.setAttribute('id', "grid" +i+ j);
        squareDiv.setAttribute("style", `width:60px;`)

        rowContainer.appendChild(squareDiv)
    }
    container.appendChild(rowContainer)
}

function drawColor(e){
    if(mouseDown){
        const grid = e.toElement;
        grid.setAttribute("style", "background-color:red;")
    }
}

function setDimension(){
    let input = prompt("Please Choose your dimension.");
    const dim = Number(input);
    if(dim < 1 || dim > 100){
        alert("Please keep the dimension between 1 and 100.");
        return
    }

    document.querySelector("#container").innerHTML = ""
    drawCanvas(dim);
    const grids = document.querySelectorAll(".square");

    grids.forEach(grid =>grid.addEventListener("mousedown", (e)=> {mouseDown = true;}))

    grids.forEach(grid =>grid.addEventListener("mouseup", (e)=>{
        mouseDown = false;
    }))
    
    grids.forEach(grid => grid.addEventListener("mouseenter", drawColor));
    grids.forEach(grid => grid.addEventListener("mousedown", drawColor));
}

const grids = document.querySelectorAll(".square");

grids.forEach(grid =>grid.addEventListener("mousedown", (e)=> {mouseDown = true;}))

    grids.forEach(grid =>grid.addEventListener("mouseup", (e)=>{
        mouseDown = false;
    }))
    
    grids.forEach(grid => grid.addEventListener("mouseenter", drawColor));
    grids.forEach(grid => grid.addEventListener("mousedown", drawColor));