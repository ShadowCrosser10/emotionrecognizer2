Webcam.set({
    width: 350, 
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#webcam_view");

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("picture_view").innerHTML = "<img id='snapshot' src='"+data_uri+"'>"; 
    });
}

console.log("ml5 version: ", ml5.version); 

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lFLYm1MpE/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!"); 
}
