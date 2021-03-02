export var title= document.createElement("h1");
export var pa=document.createElement("p");
export var im= document.createElement("img");
export var pa2=document.createElement("p");
export var im2= document.createElement("img");


export function pag2 (title,pa,im,pa2,im2){
    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/70/56/49/7056494f6bfae9ccdbc5c393cda8a49b.jpg')";
    document.body.style.backgroundRepeat="repeat";
    document.body.style.backgroundSize="1600px 750px";

    //title
    
    title.id="title1";
    title.innerText="La entrada al pueblo";
    title.style.textAlign="center";
    title.style.color="white";
    title.style.fontFamily="another"
    title.style.top="20px";
    
    document.body.appendChild(title);

    //paragraph
    
   
    pa.id="p1";
    
    pa.innerText="Corvo estaba en la entrada al pueblo, era tetrica y desolada por lo que una sensacion extraña cubrió su cuerpo. \nAl observar había un gran letrero desgastado y viejo que decía Bienvenidos a Hollow Village. El cielo estaba nublado y todas las casas estaban cerradas y todo estaba cubierto de neblina. \nAl mirar hacia al fondo del pueblo logró a vistar una pequeña luz y se dirigió hacia ella.";
    pa.style.color="white";
    pa.style.fontFamily="bloody";
    pa.style.textAlign="center";
    document.body.appendChild(pa);
   
    //paragraph2

   
    pa2.id="p2";
    
    pa2.innerText="\n\n\n\nAl llegar a la luz distante Corvo observó que era un pequeño hotel por lo que decidió entrar. \nCuando entró notó que no había ni una sola alma en la recepción ni en el lobby, solo una pequeña campana en la mesa. \nAl tocar la campana se abrió una puerta y de la oscuridad del cuarto salión un joven pálido y con una mirada vacía. \nCorvo le preguntó si tenía alguna habitación disponible. Al ver a Corvo el recepcionista sonrió y le dijo que si, que no se preocupara. El recepcionista le dio la bienvenida al pueblo\n casi no tenemos visitantes es un honor tener a un extranjero por aquí, nuestra hospitalidad hará que te quedes aquí para siempre. \nCorvo solo tomó la llave de la habitación y se dirigió hacia ella para tomar un descanso.";
    pa2.style.color="white";
    pa2.style.fontFamily="bloody";
    pa2.style.textAlign="center";
    document.body.appendChild(pa2);


     //image
      
     im.id="img1";
     im.style.borderRadius="12px";
     im.style.align="center";
     
     
     im.src="";
     document.body.appendChild(im);
    //image2

    
    im2.id="img2";
    im2.style.borderRadius="12px";
    im2.style.align="center";
    
    
    im2.src="";
    im2.style.
    document.body.appendChild(im2);

}

export function clean2(){
    document.getElementById("title1").innerText="";
    document.getElementById("p1").innerText="";
    document.getElementById("img1").src="";
    document.getElementById("p2").innerText="";
    document.getElementById("img2s").src="";
    



}


