
import{iniciar,clear_inicio} from "./parts/start";
import{pag1,im,title,pa,clean1} from "./parts/p1";
import{pag2,im2,pa2,clean2} from "./parts/p2";
import{pag3} from "./parts/p3";
import{death,pa3} from "./parts/death";
import {vivo} from "./parts/alive";
import "./p1.scss";
var t=title;
var p=pa;
var i=im
var p2=pa2;
var p3=pa3;
var i2=im2;
window.onload=function(){

    // inicio
    iniciar();

    // historia parte 1
    var btn= document.createElement("button");
    btn.id="btn1";
    btn.type="button";
    btn.innerText="Iniciar";
    btn.style.backgroundColor="Transparent";
    btn.style.fontFamily="BLOODY";
    btn.style.color="white";
    
    btn.style.borderRadius="16px";
    btn.style.position="relative";
    btn.style.top="600px";
    btn.style.left="700px";
    btn.style.width="150px";
    btn.style.height="50px";
    btn.style.fontSize="16px";
    btn.onclick=function(){
        p3.remove();
        p2.remove();
        clear_inicio();
        pag1(t,p,i);
        
        btn.hidden=true;
        btn2.hidden=false;
    
    };
    document.body.appendChild(btn);

    // historia parte 2
    var btn2= document.createElement("button");
    btn2.id="btn2";
    btn2.type="button";
    btn2.innerText="siguiente";
    btn2.style.backgroundColor="Transparent";
    btn2.style.fontFamily="BLOODY";
    btn2.style.color="crimson";
    btn2.hidden=true;
    btn2.style.borderRadius="16px";
    btn2.style.position="relative";
    btn2.style.top="650px";
    btn2.style.left="700px";
    btn2.style.width="150px";
    btn2.style.height="50px";
    btn2.style.fontSize="16px";
    btn2.onclick=function(){
        btn3.hidden=false;
        btn2.hidden=true;
        clean1();
        pag2(t,p,i,p2,i2);
        
        
       
    };
    document.body.appendChild(btn2);


    //historia parte 3 

       
       var btn3= document.createElement("button");
       btn3.id="btn3";
       btn3.type="button";
       btn3.innerText="siguiente";
       btn3.style.backgroundColor="Transparent";
       btn3.style.fontFamily="BLOODY";
       btn3.style.color="crimson";
       btn3.hidden=true;
       btn3.style.borderRadius="16px";
       btn3.style.position="relative";
       btn3.style.top="650px";
       btn3.style.left="700px";
       btn3.style.width="150px";
       btn3.style.height="50px";
       btn3.style.fontSize="16px";
       btn3.onclick=function(){
        btn3.hidden=true;
        btn4.hidden=false;
        btn5.hidden=false;
          // clean2();
           pag3(t,p,p2);
           
           
           
          
       };
       document.body.appendChild(btn3);


           //muerte

       
           var btn4= document.createElement("button");
           btn4.id="btn4";
           btn4.type="button";
           btn4.innerText="Quedarse";
           btn4.style.backgroundColor="Transparent";
           btn4.style.fontFamily="BLOODY";
           btn4.style.color="crimson";
           btn4.hidden=true;
           btn4.style.borderRadius="16px";
           btn4.style.position="relative";
           btn4.style.top="650px";
           btn4.style.left="500px";
           btn4.style.width="150px";
           btn4.style.height="50px";
           btn4.style.fontSize="16px";
           btn4.onclick=function(){
            btn4.hidden=true;
            btn.hidden=false;
            btn5.hidden=true;
              // clean2();
              t.innerText="";
              p2.innerText="";
              p.innerText="";
               death(p3);
               
               
               
              
           };
           document.body.appendChild(btn4);


           //vivo
            
           var btn5= document.createElement("button");
           btn5.id="btn5";
           btn5.type="button";
           btn5.innerText="Huir";
           btn5.style.backgroundColor="Transparent";
           btn5.style.fontFamily="BLOODY";
           btn5.style.color="crimson";
           btn5.hidden=true;
           btn5.style.borderRadius="16px";
           btn5.style.position="relative";
           btn5.style.top="650px";
           btn5.style.left="850px";
           btn5.style.width="150px";
           btn5.style.height="50px";
           btn5.style.fontSize="16px";
           btn5.onclick=function(){
            btn5.hidden=true;
            btn.hidden=false;
              // clean2();
              btn4.hidden=true;
              im.src="";
              t.innerText="";
              p2.innerText="";
              p.innerText="";
               vivo(t,p,p2,im);
               
               
               
              
           };
           document.body.appendChild(btn5);




    
}
