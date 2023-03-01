import * as variable from "./variable.js"

variable.loadData()


const begginerContainer  = document.querySelector(".begginer-container")
const AllProblems = variable.problems[Number(variable.keyOn)]
const heading = document.querySelector(".heading-l")
let flagsKey = variable.flags
let flags = {}

heading.textContent = variable.problemOn
// add all problems in the container
function makeHTML(value){
    return `
        <div class="problem ${value["flag"]===true ? "done" : ""}" data-key=${value.key}>
            <img src="Design/${value["flag"]===true ? "doneCheckBox" : "defaultCheckBox"}.png" alt="${value["flag"]===true ? "doneCheckBox":"defaultCheckBox"}" class="flag">
            <a class="problem-name" href="${value.url}" target="_blank">${value.problemName}</a>
            <span class="difficulty ${value.difficulty}">${value.difficulty}</span>
        </div>
    `
}
function updateContainer(parent){
    parent.innerHTML = ""
    const keys = AllProblems[0]["sequence"];
    keys.forEach(obj => {
        const HTMLtemp = makeHTML(AllProblems[obj])
        begginerContainer.insertAdjacentHTML("beforeend", HTMLtemp)
    })

}


// update tick and untick with go to leetcode
function probDone(key){
    key = Number(key)

    AllProblems[key]["flag"] = AllProblems[key]["flag"] ^ true ? true : false
    // AllProblems[0]["done"] += AllProblems[0]["flag"] ? 1 : -1

    storeFlag(key)
    updateContainer(begginerContainer)
}

function goToLeet(e){
    const parent = e.target.closest('.problem');

    if (e.target.classList.contains("flag")){
        e.target.src = "Design/doneCheckBox.png"
        probDone(parent.dataset.key)

        // variable.problems[variable.keyOn] = AllProblems
        variable.saveData()
        return
    }
    
    const link = parent.querySelector(".problem-name")["href"].slice(0,-1)
    // console.log(link);
    window.open(link, '_blank');
}
begginerContainer.addEventListener("click", goToLeet)


let preSrc = ""
function glowTick(e){
    if (e.target.classList.contains("flag")){
        preSrc = e.target.src
        e.target.src = "Design/hoverCheckBox.png"
    }
}
function preTick(e){
    if (e.target.classList.contains("flag")){
        e.target.src = preSrc
    }
}
begginerContainer.addEventListener("mouseover", glowTick)
begginerContainer.addEventListener("mouseout", preTick)



function storeFlag(key){
    flags[key] = AllProblems[key]["flag"]
    variable.flags[variable.keyOn] = flags
    if (flags[key] == false){
        delete flags[key];
    }

    variable.flags[variable.keyOn] = flags
    variable.saveData()
}

function loadFlags(){
    flags = flagsKey[variable.keyOn]

    Object.keys(flags).forEach(key => {
        key = Number(key)
        if (key in AllProblems){
            AllProblems[key]["flag"] = true
        }
    })

}



loadFlags() // load flags to allproblems
updateContainer(begginerContainer)