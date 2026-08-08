/*
==========================================
EVA CORE ENGINE
==========================================
*/

let mission = [];

let currentScreen = 0;

let variables = {};



/*
==========================================
LOAD MISSION
==========================================
*/

function loadMission(data){

    mission=data;

    variables={};

    currentScreen=1;

}



/*
==========================================
START
==========================================
*/

function startMission(){

    variables={};

    currentScreen=1;

    saveProgress();

    showScreen(1);

}



/*
==========================================
GET SCREEN
==========================================
*/

function getScreen(id){

    for(let i=0;i<mission.length;i++){

        if(mission[i].id===id){

            return mission[i];

        }

    }

    return null;

}



/*
==========================================
SHOW SCREEN
==========================================
*/

function showScreen(id){

    currentScreen = id;

    const screen = getScreen(id);

    if(!screen){

        alert("Ошибка.\nЭкран "+id+" не найден.");

        return;

    }

    UI.clear();

    if(screen.title){

        UI.setMission(screen.title);

    }

    if(screen.speaker){

        UI.setSpeaker(screen.speaker);

    }

    if(screen.text){

        UI.typeText(screen.text);

    }

    if(screen.image){

        UI.showImage(screen.image);

    }

    if(screen.extra){

        UI.setExtra(screen.extra);

    }

    if(screen.sound){

        UI.playSound(screen.sound);

    }

    if(screen.onEnter){

        screen.onEnter();

    }

    if(screen.answers){

        screen.answers.forEach(answer=>{

            UI.addButton(

                answer.text,

                ()=>{

                    chooseAnswer(answer);

                }

            );

        });

    }
    
    saveProgress();

}



/*
==========================================
ANSWER
==========================================
*/

function chooseAnswer(answer){

    if(answer.set){

        Object.keys(answer.set).forEach(key=>{

            variables[key] = answer.set[key];

        });

    }

    if(answer.action){

        answer.action();

    }

    if(answer.next){

        showScreen(answer.next);

    }

}



/*
==========================================
NEXT
==========================================
*/

function nextScreen(){

    showScreen(currentScreen+1);

}



/*
==========================================
VARIABLES
==========================================
*/

function setVar(name,value){

    variables[name]=value;

}



function getVar(name){

    return variables[name];

}



/*
==========================================
RESET
==========================================
*/

function resetMission(){

    variables={};

    currentScreen=1;

    localStorage.removeItem("eva_progress");

}



/*
==========================================
SAVE
==========================================
*/

function saveProgress(){

    localStorage.setItem(

        "eva_progress",

        JSON.stringify({

            screen:currentScreen,

            variables:variables

        })

    );

}

console.log("Progress saved.");

/*
==========================================
LOAD SAVE
==========================================
*/

function loadProgress(){

    const save = localStorage.getItem("eva_progress");

    if(!save){

        return false;

    }

    const data = JSON.parse(save);

    currentScreen = data.screen;

    variables = data.variables || {};

    showScreen(currentScreen);

    console.log("Save loaded.");

    return true;

}



/*
==========================================
RESTART
==========================================
*/

function restartMission(){

    localStorage.removeItem("eva_progress");

    variables={};

    currentScreen=1;

    saveProgress();

    showScreen(1);

}

window.addEventListener("beforeunload",()=>{

    saveProgress();

});

console.log("ENGINE LOADED");