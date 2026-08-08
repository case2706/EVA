/*
==========================================
EVA UI
==========================================
*/

const UI = {

    app: document.getElementById("app"),

    loading: document.getElementById("loading-screen"),

    mission: document.getElementById("mission-title"),

    speaker: document.getElementById("speaker"),

    text: document.getElementById("text"),

    image: document.getElementById("image-container"),

    extra: document.getElementById("extra-content"),

    buttons: document.getElementById("buttons"),

    overlay: document.getElementById("overlay"),

    modal: document.getElementById("modal"),

    modalTitle: document.getElementById("modal-title"),

    modalText: document.getElementById("modal-text"),

    modalButtons: document.getElementById("modal-buttons"),

    notification: document.getElementById("notification"),

    notificationIcon: document.getElementById("notification-icon"),

    notificationText: document.getElementById("notification-text")

};



/*
==========================================
CLEAR
==========================================
*/

UI.clear = function(){

    this.speaker.innerHTML = "";

    this.text.innerHTML = "";

    this.image.innerHTML = "";

    this.extra.innerHTML = "";

    this.buttons.innerHTML = "";

};



/*
==========================================
MISSION TITLE
==========================================
*/

UI.setMission = function(title){

    this.mission.innerHTML =
    "<span style='color:#4fd8ff'>EVA</span> / " + title;

};



/*
==========================================
SPEAKER
==========================================
*/

UI.setSpeaker = function(name){

    this.speaker.textContent = name;

};



let typingTimer=null;

UI.typeText=function(text){

    if(typingTimer){

        clearInterval(typingTimer);

    }

    this.text.innerHTML="";

    let i=0;

    const typing=document.getElementById("sound-typing");

    typingTimer=setInterval(()=>{

        if(i>=text.length){

            clearInterval(typingTimer);

            typing.pause();

            typing.currentTime=0;

            return;

        }

        if(text[i]!=" " && text[i]!="\n"){

            typing.currentTime=0;
            typing.play().catch(()=>{});

        }

        this.text.innerHTML+=text[i];

        i++;

    },18);

};

/*
==========================================
IMAGE
==========================================
*/

UI.showImage = function(src){

    this.image.innerHTML="";

    const img = document.createElement("img");

    img.src = src;

    img.className="fadeIn";

    this.image.appendChild(img);

};



/*
==========================================
EXTRA HTML
==========================================
*/

UI.setExtra = function(html){

    this.extra.innerHTML = html;

};



/*
==========================================
BUTTON
==========================================
*/

UI.addButton = function(title,callback){

    const btn = document.createElement("button");

    btn.textContent = title;

    btn.onclick = ()=>{

        this.playSound("click");

        callback();

    };

    this.buttons.appendChild(btn);

};



/*
==========================================
NOTIFICATION
==========================================
*/

UI.notify = function(icon,text){

    this.notification.style.display="flex";

    this.notification.classList.add("fadeIn");

    this.notificationIcon.innerHTML = icon;

    this.notificationText.innerHTML = text;

    setTimeout(()=>{

        this.notification.style.display="none";

    },3500);

};



/*
==========================================
MODAL
==========================================
*/

UI.showModal = function(title,text,buttons=[]){

    this.overlay.style.display="block";

    this.modal.style.display="flex";

    this.modalTitle.innerHTML = title;

    this.modalText.innerHTML = text;

    this.modalButtons.innerHTML = "";

    buttons.forEach(item=>{

        const btn=document.createElement("button");

        btn.innerHTML=item.text;

        btn.onclick=()=>{

            if(item.action){

                item.action();

            }

            UI.closeModal();

        };

        this.modalButtons.appendChild(btn);

    });

};



/*
==========================================
CLOSE MODAL
==========================================
*/

UI.closeModal = function(){

    this.overlay.style.display="none";

    this.modal.style.display="none";

};



/*
==========================================
SOUNDS
==========================================
*/

UI.playSound = function(name){

    const audio=document.getElementById("sound-"+name);

    if(!audio){

        return;

    }

    audio.currentTime=0;

    audio.play().catch(()=>{});

};



/*
==========================================
LOADING
==========================================
*/

UI.loadingAnimation=function(callback){

    const fill=document.getElementById("progress-fill");

    const percent=document.getElementById("loading-percent");

    const status=document.getElementById("loading-status");

    const loading=document.getElementById("loading-screen");

    const app=document.getElementById("app");

    const ambient=document.getElementById("sound-ambient");

    const startup=document.getElementById("sound-startup");

    startup.play().catch(()=>{});

    let p=0;

    const states=[

        "INITIALIZING CORE...",

        "LOADING MODULES...",

        "CHECKING DATABASE...",

        "VERIFYING SECURITY...",

        "STARTING EVA...",

        "READY"

    ];

    const timer=setInterval(()=>{

        p++;

        fill.style.width=p+"%";

        percent.innerHTML=p+"%";

        if(p<20){

            status.innerHTML=states[0];

        }else if(p<40){

            status.innerHTML=states[1];

        }else if(p<60){

            status.innerHTML=states[2];

        }else if(p<80){

            status.innerHTML=states[3];

        }else if(p<100){

            status.innerHTML=states[4];

        }else{

            status.innerHTML=states[5];

        }

        if(p>=100){

            clearInterval(timer);

            setTimeout(()=>{

                loading.style.display="none";

                app.classList.add("active");

                ambient.volume=0.2;

                ambient.play().catch(()=>{});

                callback();

            },500);

        }

    },35);

};

/*
==========================================
SHAKE
==========================================
*/

UI.shake=function(element){

    element.animate([

        {transform:"translateX(0)"},

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(0)"}

    ],{

        duration:350

    });

};



/*
==========================================
FLASH
==========================================
*/

UI.flash=function(){

    this.overlay.style.display="block";

    this.overlay.style.background="rgba(255,255,255,.25)";

    setTimeout(()=>{

        this.overlay.style.display="none";

        this.overlay.style.background="rgba(0,0,0,.6)";

    },120);

};

UI.showMissionComplete=function(title,message){

    this.showModal(

        "MISSION COMPLETE",

        `<h2 style="margin-bottom:15px;color:#4fd8ff">${title}</h2>

        <p>${message}</p>

        <br>

        <h3 style="color:#27ae60">
        ✔ Миссия успешно завершена
        </h3>`,

        [

            {

                text:"Главное меню",

                action:()=>{

                    showMainMenu();

                }

            }

        ]

    );

};

console.log("UI LOADED");