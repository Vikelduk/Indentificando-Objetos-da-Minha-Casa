var status = "";
var objeto = "";

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

    objeto = document.getElementById("input").value;
    console.log("Nome do Objeto pedido: " + objeto + ".");

    document.getElementById("status").innerHTML = "Modo: Detectando o  Objeto";
    document.getElementById("start").innerHTML = "Procurar outro Objeto";
}

function modelLoaded()
{
    console.log("Modelo Carregado com Sucesso");
    status = true;
}

function draw()
{
    image(video, 0, 0, 350, 350);
}

function voltar()
{
    window.location = "objetos.html";
}