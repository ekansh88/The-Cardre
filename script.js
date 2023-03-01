import * as variable from "./variable.js"
if (localStorage.length==0) {
    variable.saveData()
}
variable.loadData()

// variables

const moveBtn = document.querySelector(".moveBtn");
const roadMapBtn = document.querySelector(".roadMapBtn");
const problemsBtn = document.querySelector(".problemsBtn");
const contactBtn = document.querySelector(".contactBtn");

const modal = document.querySelector(".behind-pop-up")
const modalBox = document.querySelector(".pop-up")
const contactBox = document.querySelector(".c-pop-up")


// function
function updateBtn(){
    if (variable.keyOn!=-1){
        moveBtn.textContent = `continue`
    }
}

function toRoadMap(){
    window.location.assign("roadmap.html");
}

function toProblems(){
    if (variable.keyOn == -1){
        toRoadMap()
        return
    }
    else{
        variable.updateProblemOn(variable.problemOn);
        variable.saveData()
        window.location.assign("problems.html");
    }
}

function closeModal(){
    modal.classList.add("hidden")
    if (modalBox.classList.contains("hidden")){
        contactBox.classList.add("hidden")
    }
    else{
        modalBox.classList.add("hidden")
        variable.updateModal()
    }

}

function openModal(){
    modal.classList.remove("hidden")
    modalBox.classList.remove("hidden")
}

function openContact(){
    modal.classList.remove("hidden")
    contactBox.classList.remove("hidden")
}


// addEventListener
moveBtn.addEventListener("click", toRoadMap);
modal.addEventListener("click", closeModal)
roadMapBtn.addEventListener("click", toRoadMap)
problemsBtn.addEventListener("click", toProblems)
contactBtn.addEventListener("click", openContact)


// CALL
updateBtn()
console.log(variable.welcomeModal);
if (variable.welcomeModal=="false"){
    openModal()
    // variable.updateModal()
}





export {toRoadMap, toProblems}