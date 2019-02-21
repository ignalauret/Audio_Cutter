(function(){
//Buttons
var playButton = document.getElementById("play");
var startCutButton = document.getElementById("cut");
var saveButton = document.getElementById("save");
var uploadButton = document.getElementById("upload_i");
var backwardButton = document.getElementById("back");
var forwardButton = document.getElementById("forward");
//Layout
var timer = document.getElementById("startCounter");
var timer2 = document.getElementById("endCounter");
var shift = document.getElementById("shift");
var audio = document.getElementById("audio");
//Inputs
var label = document.getElementById("formLabel");
var elem = document.getElementById("downloadFile_a");
var file = document.getElementById("file");
var source = document.getElementById("source");
//Scripting Variables
var fileContent = "Label StartCut EndCut \n";
elem.download = "file.txt";
var cutFlag = 0;
var shiftTime = 0;

//Loop Function
var refreshTimer = function(){
  var time = audio.currentTime;
  timer2.textContent = time;
  if(!cutFlag){
    timer.textContent = time;
  }
};
refreshTimer();
var interval = setInterval(refreshTimer, 100);

//Set start cutting time.
startCutButton.onclick = function() {
  cutFlag = 1;
  startTime = timer.textContent - shiftTime;
};

//Set shift
playButton.onclick = function() {
  shiftTime = audio.currentTime;
  shift.textContent = shiftTime;

}

//Save data from this cut into file.
saveButton.onclick = function(){
  if(label.value.length > 0){
    endTime = timer2.textContent - shiftTime;
    temp = label.value + " " + startTime + " " + endTime + "\n";
    fileContent = fileContent + temp;
    elem.href = "data:application/octet-stream," + encodeURIComponent(fileContent);
    cutFlag = 0;
  } else {
    window.alert("No label");
  }
};

//Forwarding on time
forwardButton.onclick = function(){
  audio.currentTime = audio.currentTime + 0.5;
};

//Backwarding on time
backwardButton.onclick = function(){
  audio.currentTime = audio.currentTime - 0.5;
};

//Upload audio file
uploadButton.onclick = function(){
    source.src = file.files[0].name;
    audio.load();
  }


}())
