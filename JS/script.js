function toggleTable(tableID) {
  var x = document.getElementById(tableID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleIcon() {
  var x = document.getElementsByClassName("fa-solid fa-caret-down")
  x.classList.toggle("fa-solid fa-caret-up");
}
 function change (iconID){
  if(document.getElementById(iconID).className=="fa-solid fa-caret-down"){
    document.getElementById(iconID).className = "fa-solid fa-caret-up";
  }else{
    document.getElementById(iconID).className = "fa-solid fa-caret-down";
  }
}