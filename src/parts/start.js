export function iniciar(){

    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/35/44/02/354402069a75e9335ca81760a5a02546.jpg')";


    var t= document.createElement("h1");
    t.id="t";
    t.style.textAlign="center";
    t.style.fontFamily="bloody";
    t.style.fontSize="32px";
    t.style.color="crimson";
    t.style.position="relative";
    t.style.top="300px";
    t.innerText="Bienvenidos a la historia de Hollow Village";
    document.body.appendChild(t);
}

export function clear_inicio(){

    document.getElementById("t").innerText="";

}