export var title= document.createElement("h1");
export var pa=document.createElement("p");

export var pa2=document.createElement("p");



export function pag3 (title,pa,pa2){
    document.body.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/393299684188728410/B6117CCE044E056744A747D7A2D9D93C896DD2FB/')";
    document.body.style.backgroundRepeat="repeat";
    document.body.style.backgroundSize="1600px 750px";

    //title
    
    
    title.innerText="La salvacion de Corvo";
    

    //paragraph
    
   
    pa.id="p1";
    
    pa.innerText="Al enterarse de los demonios que habitaban en Hollow Village Corvo se apresuró por salir de ese hotel,\n corrió por el pasillo hasta llegar a la recepción y el recepcionista le dijo relájate no corras mientras lo veía de una forma malevola. \nCorvo trató de abrir la puerta de la salida mientras el recepcionista se acercaba lentamente riendo y diciendole ya te enteraste quienes somos en verdad.";
    pa.style.color="white";
    pa.style.fontFamily="bloody";
    pa.style.textAlign="center";
    document.body.appendChild(pa);
   
    //paragraph2

   
    pa2.id="p2";
    
    pa2.innerText="\n\n\n\nCorvo por fin pudo abrir la puerta del hotel y al salir al pueblo se encontró con todos los habitantes viendolo fijamente con esos ojos carmesí mientras todos caminaban lentamente hacia el.\n Que quieres hacer despues?\n\n\n (Es vital este evento la acción que tomes afectará el resto de la historia)";
    pa2.style.color="white";
    pa2.style.fontFamily="bloody";
    pa2.style.textAlign="center";
    document.body.appendChild(pa2);


     

}