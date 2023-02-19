objects = [];
status = "";
img = "";

function c()
{
    window.location = "index.html"
}

function preload()
{
    img = loadImage("ac and tv.png");
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw()
{
    image(img, 0 , 0 , 480 , 380);
    if(status != "")
    {
        objectDetector.detect(img, gotResult);

        for (i = 0; i < objects.length; i++)
        {
            console.log("Number of Objects Detected : " + objects.length)

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);i
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    console.log("Starting detecting")
}

function modelLoaded()
{
    console.log("ModelLoaded");
    status = true;
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;

}