menuID=["menu-home","menu-projects","menu-blog","menu-about"];
menuValue=[0,0,0,0];
homeImageState=0




//////////////////// SIDE BAR ///////////////////////

function menuLoad(i){//gradual opacity on page load
    var item=document.getElementsByClassName('side-btn')[i];
    item.animate([
        {opacity: '0'},
        {opacity: '1'},
        ], 
    {
        duration:750,
        easing: "ease-in",
        delay:0+(150*i),
        iterations: 1,
        fill: 'forwards',
    });
}

window.onload = function(){
    for(i=0;i<4;i++){
        menuLoad(i);
    }
};

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

for (i=0; i<4; i++){ //apply to menu btns
    createMenuClickEvent(i);
};

function controlMenuColor(){ //check array, update colors accordingly
    for (i=0; i<4; i++){
        if (menuValue[i]==0){ 
            document.getElementById(menuID[i]).style.backgroundColor="white";
        }

        else{
            document.getElementById(menuID[i]).style.backgroundColor="#a2e8b8";
        }
    }
}






////////////////////// PROJECT OPTION /////////////////////////////

function projectLoad(i){//project-box creation animation 
    var item=document.getElementsByClassName('project-box')[i];
    item.animate([
        {opacity:'0', transform:'TranslateY(50%)'},
        {opacity:'1', transform:'TranslateY(0%)'},
    ],
    {
        duration:500,
        easing: "ease-out",
        iterations:1,
        fill: 'forwards',
    });
}

function displayProjectDescriptionEvent(i){//hover over shows info
    $(document).on("mouseenter","#proj"+i,function(){
        document.getElementsByClassName("project-info")[i].animate([
            
            {opacity:'0'},
            {opacity:'1'},
        ],
        {
            duration:250,
            iterations:1,
            fill:'forwards'
        })
    })

    $(document).on("mouseleave","#proj"+i, function(){
        document.getElementsByClassName("project-info")[i].animate([
            
            {opacity:'1'},
            {opacity:'0'},
        ],
        {
            duration:250,
            iterations:1,
            fill:'forwards'
        })
    })
}




//////////////////////////////// HOME ///////////////////////////

function loadHome(){
    for(i=0; i<homeImagePath.length; i++){
        var currentImage=document.createElement('img');
        currentImage.className="home-image"
        currentImage.id="himg"+(i+1);
        currentImage.src=homeImagePath[i];

        document.getElementsByClassName("home-container")[0].appendChild(currentImage);
    }
    
    for(i=0; i<2; i++){
        var currentArrow=document.createElement('img');
        if(i==0){
            currentArrow.className="arrow front";
            currentArrow.id="frontArrow";
        }
        else{
            currentArrow.className="arrow back";
            currentArrow.id="backArrow";
        }
        currentArrow.src="/icons/arrow.png";
        document.getElementsByClassName("home-container")[0].appendChild(currentArrow)
    }
}


function shiftRight(){
    if(homeImageState==(homeImagePath.length-1)){
        var leap=homeImageState*100
        for(i=1; i<homeImagePath.length+1; i++){
            $('#himg'+i).animate(
                {left: '+='+leap+'%'},
                {duration:700,
                easing: "swing"})
            } 
        homeImageState=0;
    }
    else{
    for(i=1; i<homeImagePath.length+1; i++){
        $('#himg'+i).animate(
            {left: '+=-100%'},
            {duration:700,
            easing: "swing"})
        } 
        homeImageState+=1;
    }
    
    }

function shiftLeft(){
    if(homeImageState==0){
        var leap=-((homeImagePath.length*100)-100)
        for(i=1; i<homeImagePath.length+1; i++){
            $('#himg'+i).animate(
                {left: '+='+leap+'%'},
                {duration:700,
                easing: "swing"})
            } 
        homeImageState=homeImagePath.length-1;
    }
    else{
    for(i=1; i<homeImagePath.length+1; i++){
        $('#himg'+i).animate(
            {left: '+=100%'},
            {duration:700,
            easing: "swing"})
        } 
        homeImageState-=1;
    }
    
    }

function homeClickEvents(){
    $(document).on("click","#frontArrow",function(){
        shiftRight();
    })
    
    $(document).on("click","#backArrow",function(){
        shiftLeft();
    })
    
}


////////////////////////// CONTENT CONTROL /////////////////////

function createContent(contentType){
    if(contentType=="projects"){
    for(i=0; i<projectTitle.length; i++){

        var currentBox=document.createElement('div');
        var currentTitle=document.createElement('div');
        var currentDate=document.createElement('div');
        var currentDescription=document.createElement('div');
        var currentImage=document.createElement('img');
        var currentLink=document.createElement('a');

        currentBox.className="project-box";
        currentBox.id="proj"+i;

        currentTitle.className="project-title";
        currentDate.className="project-date";
        currentDescription.className="project-info";
        currentImage.className="project-image";
        
        
        
        
        currentTitle.innerHTML=projectTitle[i];
        currentDescription.innerHTML=projectDescription[i];
        currentDate.innerHTML=projectDate[i];
        currentImage.src=projectImage[i];
        currentLink.href=projectRelPath[i];
        currentDescription.style.opacity=0;


        document.getElementsByClassName("content-container")[0].appendChild(currentBox);


        currentBox.appendChild(currentLink);
        currentBox.appendChild(currentImage); // IMPORTANT THIS GOES 1ST!!
        //or else its multiply CSS attribute will blend with EVERYTHING BEFORE IT 
        currentBox.appendChild(currentTitle);
        currentBox.appendChild(currentDate);
        currentBox.appendChild(currentDescription);
        

        displayProjectDescriptionEvent(i);
        projectLoad(i);
    };
}

    else if (contentType=="resources"){
        for(i=0; i<resourceTitle.length; i++){

            var currentBox=document.createElement('div');
            var currentTitle=document.createElement('div');
            var currentDate=document.createElement('div');
            var currentDescription=document.createElement('div');
            var currentImage=document.createElement('img');
            var currentLink=document.createElement('a');
    
            currentBox.className="project-box";
            currentBox.id="proj"+i;
    
            currentTitle.className="project-title";
            currentDate.className="project-date";
            currentDescription.className="project-info";
            currentImage.className="project-image";
            
            
            
            
            currentTitle.innerHTML=resourceTitle[i];
            currentDescription.innerHTML=resourceDescription[i];
            currentDate.innerHTML=resourceDate[i];
            currentImage.src=resourceImage[i];
            currentLink.href=resourceRelPath[i];
            currentDescription.style.opacity=0;
    
    
            document.getElementsByClassName("content-container")[0].appendChild(currentBox);
    
    
            currentBox.appendChild(currentLink);
            currentBox.appendChild(currentImage); // IMPORTANT THIS GOES 1ST!!
            //or else its multiply CSS attribute will blend with EVERYTHING BEFORE IT 
            currentBox.appendChild(currentTitle);
            currentBox.appendChild(currentDate);
            currentBox.appendChild(currentDescription);
            
    
            displayProjectDescriptionEvent(i);
            projectLoad(i);
        };

    }
}
function applyMenuOptions(){ //change content depending on menuValue array
    clearPage();
    
    if (menuValue[0]==1){      //home
        loadHome();
    }

    else if(menuValue[1]==1){     //projects
        createContent("projects");
    }

    else if (menuValue[2]==1){      //resources...
        createContent("resources");
    }

    else if (menuValue[3]==1){      //about

    }
}

function clearPage(){ //delete all children of content-container
    var oldContent=document.getElementsByClassName("content-container")[0];
    var oldHome=document.getElementsByClassName("home-container")[0];

    oldContent.parentNode.removeChild(oldContent);
    oldHome.parentNode.removeChild(oldHome);

    var blankContent=document.createElement('div');
    var blankHome=document.createElement('div');

    blankContent.className="content-container";
    blankHome.className="home-container"

    document.getElementsByClassName("main-body")[0].appendChild(blankContent);
    document.getElementsByClassName("main-body")[0].appendChild(blankHome);
    homeImageState=0;
}




homeClickEvents()