import * as variable from "./variable.js"

// variables
const container = document.querySelector(".lists")
const allProblems = variable.problems
// load data
variable.loadData()


// function
function moveToProblem(e){
    const parent = e.target.closest('.topic');
    variable.updateProblemOn(parent.children[0].textContent);
    if (parent.classList.contains("inactive-topic")) return;
    variable.saveData()
    window.location.assign("problems.html");
}

function updateDoneTopic(){
    Array.from(container.children).forEach(element => {

        const topicName = element.querySelector(".name-topic").textContent;
        const topicKey = variable.keyToTopic[topicName]

        let totalProb = 0 
        let done = 0

        if (variable.problems[topicKey][0]["sequence"]){
            totalProb = variable.problems[topicKey][0]["sequence"].length 
        } 
        if (Object.keys(variable.flags[topicKey])){
         Object.keys(variable.flags[topicKey]).forEach(key =>{
            if (key in variable.problems[topicKey]){
                if (variable.problems[topicKey][key]){
                    done ++
                }
            }
         })
        }
    
        element.querySelector(".done-topic").textContent = done
        element.querySelector(".problems-topic").textContent = totalProb
    })
}


// addEventListener
container.addEventListener("click", moveToProblem)


// function call
updateDoneTopic()