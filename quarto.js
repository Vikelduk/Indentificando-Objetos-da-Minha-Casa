img = "";
status = "";

function preload()
{
    img = loadImage("decoracao-lucianecandido-219036-proportional-height_cover_medium.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(350, 150);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Modo: Detectando Objetos";
}

function modelLoaded()
{
    console.log("Modelo Carregado com Sucesso!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
}