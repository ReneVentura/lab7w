import {typeWriter} from "./buttons"
export var title= document.createElement("h1");
export var pa=document.createElement("p");
export var im= document.createElement("img");

export function pag1 (title,pa,im){
    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/74/db/0d/74db0d722fa79f818b7f4a49247ba875.gif')";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="1600px 750px";

    //title
    
    title.id="title1";
    title.innerText="Hollow Village";
    title.style.textAlign="center";
    title.style.color="white";
    title.style.fontFamily="another"
    title.style.top="20px";
    
    document.body.appendChild(title);


    //paragraph

   
    pa.id="p1";
    
    pa.innerText="Corvo por fin habia aterrizado en Escocia, despues de 8 largas horas de vuelo estaba cansado y solo queria dormir \nEn un anuncio, justo al salir del arepuerto vio un pequeño pueblo el cual se llamaba Hollow Village, le pareció muy interesante\ny decidió pedir un taxi con rumbo al pequeño pueblo.";
    pa.style.color="white";
    pa.style.fontFamily="bloody";
    pa.style.textAlign="center";
    document.body.appendChild(pa);

    //image

    
    im.id="img1";
    im.style.borderRadius="12px";
    im.style.align="center";
    
    
    im.src="https://www.hauntedhappenings.co.uk/uploads/175The_Village.jpg";
    document.body.appendChild(im);

}

export function clean1(){
    document.getElementById("title1").innerText="";
    document.getElementById("p1").innerText="";
    document.getElementById("img1").src="";
    



}




