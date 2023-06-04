status="";
function preload()
{
  img = loadImage('bed_img.webp');
}
function setup()
{
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML  = "Status : Detecting Objects";
}
function modelLoaded()
{
  console.log("modelLoaded!");
  status = true;
  objectDetector.detect(img, gotResults);
}
function gotResults(error, results)
{
  if(error){
    console.log(error);
  }
  console.log(results);
  objects = results;
}