menuID=["menu-home","menu-projects","menu-blog","menu-about"];
menuValue=[0,0,0,0];

function controlMenuColor(){
    for (i=0; i<4; i++){
        //Changes back to original color if not clicked
        if (menuValue[i]==0){ 
            document.getElementById(menuID[i]).style.backgroundColor="#a2e8b8";
            document.getElementById(menuID[i]).style.opacity=0.4;
        }
        //Changes color on click
        else{
            document.getElementById(menuID[i]).style.backgroundColor="#6adf8e";
            document.getElementById(menuID[i]).style.opacity=1;
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
        }
    })
}

//now loop to apply that generic function to all menu btns 
for (i=0; i<4; i++){
    createMenuClickEvent(i);
};



//For the project icons
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