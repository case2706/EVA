/*
==========================================
EVA APP
==========================================
*/

document.addEventListener("DOMContentLoaded", init);

window.addEventListener("keydown",(e)=>{

    if(e.key==="F5"){

        saveProgress();

    }

});

function init(){

    UI.loadingAnimation(()=>{

        showMainMenu();

    });

}

function showMainMenu(){

    checkFiles();

    UI.clear();

    UI.setMission("EVA CORE");

    UI.setSpeaker("EVA");

    UI.typeText(`Добро пожаловать.

Выбери миссию.

Все миссии независимы друг от друга.`);

    UI.addButton("📘 Обучение",()=>{

        loadMission(mission1);

        startMission();
	saveProgress();

    });

    UI.addButton("🎣 Mission 02 - Phishing",()=>{

        loadMission(mission2);

        startMission();
	saveProgress();

    });

    UI.addButton("🕵 Mission 03 - Social Engineering",()=>{

        loadMission(mission3);

        startMission();
	saveProgress();

    });

    UI.addButton("🖥 Mission 04 - Workplace Security",()=>{

        loadMission(mission4);

        startMission();
	saveProgress();

    });

    UI.addButton("🚨 Mission 05 - Incident Response",()=>{

        loadMission(mission5);

        startMission();
	saveProgress();

    });

    UI.addButton("🏆 Mission 06 - Final Incident",()=>{

        loadMission(mission6);

        startMission();
	saveProgress();

    });

    UI.addButton("🐧 Mission 07 - New User",()=>{

        loadMission(mission7);

        startMission();

        saveProgress();

    });

    UI.addButton("👥 Mission 08 - Groups",()=>{

        loadMission(mission8);

        startMission();

        saveProgress();

    });

    UI.addButton("🔐 Mission 09 - Permissions",()=>{

        loadMission(mission9);

        startMission();

        saveProgress();

    });

    UI.addButton("👤 Mission 10 - Ownership",()=>{

        loadMission(mission10);

        startMission();

        saveProgress();

    });

    UI.addButton("📁 Mission 11 - Files",()=>{

        loadMission(mission11);

        startMission();

        saveProgress();

    });

    UI.addButton("⚙️ Mission 12 - Processes",()=>{

        loadMission(mission12);

        startMission();

        saveProgress();

    });

    UI.addButton("🌐 Mission 13 - Network",()=>{

        loadMission(mission13);

        startMission();

        saveProgress();

    });

    UI.addButton("📜 Mission 14 - Logs",()=>{

        loadMission(mission14);

        startMission();

        saveProgress();

    });

    UI.addButton("💾 Mission 15 - Backup",()=>{

        loadMission(mission15);

        startMission();

        saveProgress();

    });

    UI.addButton("🏁 Mission 16 - Administrator",()=>{

        loadMission(mission16);

        startMission();

        saveProgress();

    });

    UI.addButton("🗑 Сбросить прогресс",()=>{

        localStorage.removeItem("eva_progress");

        UI.notify("✔","Прогресс удалён.");

    });


    UI.addButton("▶ Выход",()=>{

        UI.showModal(

            "EVA",

            "Спасибо за использование EVA.",

            [

                {

                    text:"Закрыть"

                }

            ]

        );

    });

}

setInterval(()=>{

    saveProgress();

},3000);

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        UI.closeModal();

    }

});

window.onerror=function(message,file,line){

    console.error(message,file,line);

};
function checkFiles(){

    const missions=[
        mission1,
        mission2,
        mission3,
        mission4,
        mission5,
        mission6,
        mission7,
        mission8,
        mission9,
        mission10,
        mission11,
        mission12,
        mission13,
        mission14,
        mission15,
        mission16,
    ];

    let ok=0;

    missions.forEach(m=>{

        if(m){

            ok++;

        }

    });

    console.log("MISSIONS:",ok+"/16");

}

console.log("================================");
console.log("EVA CORE SYSTEM");
console.log("Version: 1.0");
console.log("Status: READY");
console.log("================================");

setInterval(()=>{

    saveProgress();

},10000);

window.onload=()=>{

    console.log("EVA READY");

};