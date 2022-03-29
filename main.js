function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cRpD1-lbg/model.json",modelReady);
}
var dog=0;
var cat=0;
function modelReady(){
    
    classifier.classify( gotResults);

}

function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_label").innerHTML='Detected voice is of  - '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Detected Dog - '+dog+ ' Detected Cat - '+cat;

img1=document.getElementById("image1");
    

if(results[0].label == "Cat"){
    img1.src="meow.gif" ;  
   cat=cat+1;
}else if(results[0].label == "Background Noise"){
    img1.src="bark.gif" ;  
    dog=dog+1;
    }else {
    img1.src="listen.gif" ;  

}
}
}