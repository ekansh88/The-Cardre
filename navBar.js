import * as variable from "./variable.js"

// variable.loadData()

// variables

const roadMapBtn = document.querySelector(".roadMapBtn");
const problemsBtn = document.querySelector(".problemsBtn");
const contactBtn = document.querySelector(".contactBtn");
const toHomeLink = document.querySelector(".toHomeLink");

const modal = document.querySelector(".behind-pop-up") // blur wala
const modalBox = document.querySelector(".pop-up") // welcome wala
const contactBox = document.querySelector(".c-pop-up") // contact wala


// function

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

function toHome(){
    window.location.assign("index.html");
}

function closeModal(){
    modal.classList.add("hidden")
    // if (modalBox.classList.contains("hidden")){
    //     modalBox.classList.add("hidden")
    // }
    // else{
    //     contactBox.classList.add("hidden")
    //     variable.updateModal()
    // }
    modalBox?.classList.add("hidden")
    contactBox?.classList.add("hidden")

}

function openContact(){
    modal.classList.remove("hidden")
    contactBox.classList.remove("hidden")
}


// addEventListener

modal.addEventListener("click", closeModal)
roadMapBtn.addEventListener("click", toRoadMap)
problemsBtn.addEventListener("click", toProblems)
contactBtn.addEventListener("click", openContact)
toHomeLink.addEventListener("click", toHome)

// CALL

