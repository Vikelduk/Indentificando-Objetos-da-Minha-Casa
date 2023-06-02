img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('Fonte-Meet-Arquitetura-e-Interiores-770x513.webp  ');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(350, 150);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Modo: Detectando Objeto";
}

function modelLoaded()
{
    console.log("Modelo Carregado com Sucesso");
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
        objects = results;
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if (status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            porcent = floor(objects[i].confidence * 100); 
            
            fill("#FF0000");
            text(objects[i].label + " " + porcent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            document.getElementById("status").innerHTML = "Modo: Objeto Detectado"
        }
    }
}

function voltar()
{
    window.location = "objetos.html"
}