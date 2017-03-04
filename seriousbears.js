// Custom JS for SERIOUSBEARS.NET

/*
if(twitchPlayer.getEnded()){
document.getElementById("responsiveContainerTwitch").style.display = "block";  
}else{
document.getElementById("responsiveContainerGiphy").style.display = "block";
}
*/

function toggleChat(){
  
if(document.getElementById("chatContainer").style.display == "none" || document.getElementById("chatContainer").style.display === ""){
  
  document.getElementById("homepage").style.display = "none";
  document.getElementById("chatContainer").style.display = "block";
  
  }else{
  
  document.getElementById("homepage").style.display = "block";
  document.getElementById("chatContainer").style.display = "none";
  
  }
  
}

function returnHome(){
  
    if(document.getElementById("homepage").style.display == "none" || document.getElementById("homepage").style.display === ""){

    document.getElementById("homepage").style.display = "block";
    document.getElementById("chatContainer").style.display = "none";

    }

}