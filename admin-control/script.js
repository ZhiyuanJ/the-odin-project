
const kanban = document.querySelector("#main_body>#kanban");
const highlight = document.createElement('div');
highlight.classList.add("highlight");



for(let i = 1; i < 7; i++){
    let pad = document.createElement('div');
    pad.classList.add("pad")
    pad.setAttribute("id", "pad" + i)
    pad.appendChild(highlight.cloneNode(true))

    let project_name = document.createElement('h1');
    project_name.classList.add("project_name");

    let project_content = document.createElement('p');
    project_content.classList.add("content");


    if(i === 1){
        pad.style.gridArea  = "2/1/3/2";
        project_name.textContent = "Cool Project"
        
        pad.appendChild(project_name)
    }else if(i === 2){
        pad.style.gridArea = "2/2/3/3";
        project_name.textContent = "Less Cool Project"
        pad.appendChild(project_name)
    }else if(i === 3){
        pad.style.gridArea = "3/1/4/2";
        project_name.textContent = "Impossible App"
        pad.appendChild(project_name)
    }else if(i === 4){
        pad.style.gridArea = "3/2/4/3";
        project_name.textContent = "Easy Peasy App"
        pad.appendChild(project_name)
    }else if(i === 5){
        pad.style.gridArea = "4/1/5/2";
        project_name.textContent = "Ad Blocker"
        pad.appendChild(project_name)
    }else{
        pad.style.gridArea = "4/2/5/3"
        project_name.textContent = "Money Maker"
        pad.appendChild(project_name)
    }
    console.log(project_name);

    kanban.appendChild(pad);
}

