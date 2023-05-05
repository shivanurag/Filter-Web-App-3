noseX=0;
noseY=0;
function preload()
{
  mustache=loadImage('https://i.postimg.cc/VkWBwh9m/m.png');
}

 function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX=+results[0].pose.nose.x-50;
    noseY=+results[0].pose.nose.y;
    console.log("NoseX = "+noseX);
    console.log("NoseY = "+noseY);
}
}

function modelLoaded()
{
  console.log("Posenet is initialised");  
}
 function draw()
{
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,100,80);
}

 function take_snapshot()
{
    save('Mustache face.png');
}