menuID=["menu-home","menu-projects","menu-blog","menu-about"];
menuValue=[0,0,0,0];

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
        }
    })
}

//now loop to apply that generic function to all menu btns 
for (i=0; i<4; i++){
    createMenuClickEvent(i);
};