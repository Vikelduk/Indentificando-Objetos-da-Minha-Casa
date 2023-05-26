status = "";
objects = [];

function preload()
{
    alarme = new Audio('alarm_clock_old.mp3');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.position(500, 130);

    video = createCapture(VIDEO);
    video.hide()
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Modo: Monitorando o Ambiente";
}

function modelLoaded()
{
    console.log("Modelo Carregado com Sucesso!");
    status = true;
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
    image(video, 0, 0, 380, 380);
    console.log("Objetos = " + objects.lenght + ";");

    if (status != "")
    {
        objectDetector.detect(video, gotResult);

        if (objects.lenght > 0)
        {
            for (i = 0; i < objects.lenght; i++)
            {
                bebe = objects[i].label;

                if (bebe == 'person')
                {
                    document.getElementById("bebela").innerHTML = "Bebê Detectado";
                }
                else
                {
                    alarme.play();
                    document.getElementById("bebela").innerHTML = "Bebê não aparente!";
                }
        
                document.getElementById("status").innerHTML = "Modo: Monitorando o Ambiente";
            }  
        }
        else
        {
            document.getElementById("bebela").innerHTML = "Nenhum objeto encontrado";
        }
    }
}

function voltar()
{
    window.location = "cameras.html";
}