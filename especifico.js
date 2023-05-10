var status = "";
var input = "";
var objects = [];

function setup()
{
    canvas = createCanvas(330, 330);
    canvas.position(525, 227);

    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    input = document.getElementById("input").value;
    console.log("Nome do Objeto pedido: " + input + ".");

    document.getElementById("status").innerHTML = "Modo: Detectando o  Objeto";
    document.getElementById("start").innerHTML = "Procurar outro Objeto";
}

function modelLoaded()
{
    console.log("Modelo Carregado com Sucesso");
    status = true;
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }       
    console.log(results);
    objects = results;
}

function draw()
{
    image(video, 0, 0, 350, 350);

    if (status != "")
    {
        objectDetector.detect(video, gotResult);

        for (i = 0; i < objects.length; i++)
        {
            if(objects[i].label == input)
            {
                percent = floor(objects[i].confidence * 100);

                fill("#FF0000");
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

                document.getElementById("status").innerHTML = "Objeto Encontrado Aqui";
            }
        }
    }
}  

function voltar()
{
    window.location = "objetos.html";
}