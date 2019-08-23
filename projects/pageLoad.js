function loadNavigation(){

    for  (i=0; i<projectTitle.length; i++){
        var currentTitle=document.createElement('h3');
        var currentLink=document.createElement('a');
        
        currentLink.href=projectRelPath[i];
        currentTitle.innerHTML=projectTitle[i];

        currentLink.innerHTML="<h3>"+projectTitle[i]+"</h3>";

        document.getElementsByClassName("content-navigator")[0].appendChild(currentLink);
        document.getElementsByClassName("content-navigator")[0].appendChild(document.createElement('hr'));
        
    }
}

window.onload = function(){
    loadNavigation();
};