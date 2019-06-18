menuID=["menu-home","menu-projects","menu-blog","menu-about"];
menuValue=[0,0,0,0];

//Im doing the animation here because using CSS keyframes triggers the animation any single time the element is activated instead of only on load :< Also good practice.

function menuLoad(i){
    var item=document.getElementsByClassName('side-btn')[i];
    item.animate([
        {opacity: '0'},
        {opacity: '1'},
        ], 
    {
        duration:750,
        easing: "ease-in",
        delay:300+(200*i),
        iterations: 1,
        fill: 'forwards',
    });
}

function projectLoad(i){
    var item=document.getElementsByClassName('project-box')[i];
    item.animate([
        {opacity:'0'},
        {opacity:'1'},
    ],
    {
        duration:500,
        easing: "ease-in",
        iterations:1,
        fill: 'forwards',
    });
}

window.onload = function(){
    for(i=0;i<4;i++){
        menuLoad(i);
    }
};

$(document).on('load', "#proj0", function(){
    alert('a');
});

function controlMenuColor(){
    for (i=0; i<4; i++){
        if (menuValue[i]==0){ //if corresponding menu value 0
            document.getElementById(menuID[i]).style.backgroundColor="white";
        }

        else{
            document.getElementById(menuID[i]).style.backgroundColor="#a2e8b8";
        }
    }
}


function createMenuClickEvent(i){ //to give functionality to menu btns
    //this is a jquery function
    $(document).on("click","#"+menuID[i],function(){
        if (menuValue[i]==1){
            return
        }
        else{
            menuValue=[0,0,0,0];
            menuValue[i]=1;
            controlMenuColor();
            applyMenuOptions();
        }
    })
}

//now loop to apply that generic function to all menu btns 
for (i=0; i<4; i++){
    createMenuClickEvent(i);
};



function clearContent(){
    var oldContent=document.getElementsByClassName("content-container")[0];
    oldContent.parentNode.removeChild(oldContent);
    var blankContent=document.createElement('div');
    blankContent.className="content-container";
    document.getElementsByClassName("main-body")[0].appendChild(blankContent);
}

function displayProjectDescriptionEvent(i){
    $(document).on("mouseenter","#proj"+i,function(){
        document.getElementsByClassName("project-info")[i].style.opacity=1;
    })
    $(document).on("mouseleave","#proj"+i, function(){
        document.getElementsByClassName("project-info")[i].style.opacity=0;
    })
}

function applyMenuOptions(){
    clearContent();
    if (menuValue[0]==1){      //home

    }

    else if(menuValue[1]==1){     //projects
        for(i=0; i<projectTitle.length; i++){

            var currentBox=document.createElement('div');
            var currentTitle=document.createElement('div');
            var currentDate=document.createElement('div');
            var currentDescription=document.createElement('div');

            currentBox.className="project-box";
            currentBox.id="proj"+i;
            currentTitle.className="project-title";
            currentDate.className="project-date";
            currentDescription.className="project-info";
            
            
            
            
            currentTitle.innerHTML=projectTitle[i];
            currentDescription.innerHTML=projectDescription[i];
            currentDate.innerHTML=projectDate[i];
            currentDescription.style.opacity=0;


            document.getElementsByClassName("content-container")[0].appendChild(currentBox);

            currentBox.appendChild(currentTitle);
            currentBox.appendChild(currentDate);
            currentBox.appendChild(currentDescription);
            displayProjectDescriptionEvent(i);
            
        }
    }

    else if (menuValue[2]==1){      //blog? EXTRA non project stuff

    }

    else if (menuValue[3]==1){      //about

    }
}
