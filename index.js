       var canvas=document.getElementById("mycanvas");
       var ctx=canvas.getContext("2d");
       var audio=document.getElementById("audio");
       audio.play(); 
       alert("Read instructions on the right hand side before proceeding");
       var arrowX=20;
       var arrowY=50;
       var arrowLength=25;
       var dx=+3;
       var dy=-4;
       var played=false;
       var ccx=200;
       var ccy=50;
       var score=0;
       var ax=2;
       var ay=40;
       var heartx=80;
       var hearty=80; 
       var img=document.getElementById("archer");
       var heart=document.getElementById("heart");
       var farcher=document.getElementById("farcher");
       var male=document.getElementById("male");
       var malex=80;
       var maley=10;   
       var Paused=false; 
       var gamecount=0;//declaring variables
      drawbullseye();
      drawarrow();
      document.addEventListener("keydown",shoot,false);
      document.getElementById("score").innerHTML=score;//getting a place to store score
      document.addEventListener("keydown",moveup,false);
      document.addEventListener("keydown",movedown,false);
      document.addEventListener("keydown",gamepause,false);//adding Event Listeners for keyboard activities
      function drawarrow()
       {
  
            ctx.beginPath();
            ctx.moveTo(arrowX,arrowY);
            ctx.lineTo(arrowX+arrowLength,arrowY);
            ctx.lineTo(arrowX+arrowLength-2,arrowY-2);
             ctx.lineTo(arrowX+arrowLength-2,arrowY+2);
            ctx.lineTo(arrowX+arrowLength,arrowY);

            ctx.fill();
            ctx.stroke();
            ctx.closePath();
           }//this is to draw the arrow in positions desired
      function drawbullseye()
       {
            ctx.beginPath();
            ctx.arc(ccx,ccy,15,0,Math.PI*2,true);
            ctx.moveTo(ccx+5,ccy);
             ctx.fill();
             ctx.fillStyle="black";
             ctx.beginPath();
             ctx.arc(ccx,ccy,10,0,Math.PI*2,true);
             ctx.moveTo(ccx+10,ccy);
 
             ctx.fill();
             ctx.fillStyle="red";
             ctx.beginPath();
             ctx.arc(ccx,ccy,7,0,Math.PI*2,true);
             ctx.moveTo(ccx+15,ccy);
             ctx.fill();
             ctx.fillStyle="yellow";
             ctx.beginPath();
             ctx.arc(ccx,ccy,5,0,Math.PI*2,true);
             ctx.moveTo(ccx+20,ccy);
             ctx.fill();
             ctx.fillStyle="green";
             ctx.beginPath();
             ctx.arc(ccx,ccy,3,0,Math.PI*2,true);
             ctx.fill();
             ctx.fillStyle="blue";
             }//this is to draw the target in positions desired
         function game()

        { audio.play();
                  if(!Paused)
           { 
                  ctx.clearRect(0,0,canvas.width,canvas.height);
             drawman(); drawarrow();drawbullseye();drawheart();drawmale();
                if(arrowX==20)
                { ay=arrowY-10;
                 ctx.drawImage(img,ax,ay,30,30);}
                    
                   if(played)      {
                                   
                                 
                                 drawman();
                                 drawbullseye();
                                   drawarrow();
                                    arrowX+=dx;
                                         ccy+=dy;   
                                     }
                  if((ccy<=15)||(ccy+15>=canvas.height))
                    {
                       dy=-dy;
                       

                    } 
                  if(arrowLength+arrowX==canvas.width)
                  {
                   drawarrow();
                   played=false;
                        arrowX=20;
                      gamecount++;     
                     }

                                     if(((Math.abs(ccx-arrowX-arrowLength)<15)&&(Math.abs(ccy-arrowY)<15))&&((Math.abs(ccx-arrowX-arrowLength)>5)&&(Math.abs(ccy-arrowY)>5)))
                     {score=score+2;
                        document.getElementById("targetz").innerHTML="<b>KEEP TRYING HARDER</b>";
                           
                       }
                else  if(((Math.abs(ccx-arrowX-arrowLength)<5)&&(Math.abs(ccy-arrowY)<5))&&((Math.abs(ccx-arrowX-arrowLength)>=3)&&(Math.abs(ccy-arrowY)>=3)))
                       { score=score+5;
                           document.getElementById("targetz").innerHTML="<b>Ouch!Nearly Missed It</b>"; 
                            }

                              
                  else if((Math.abs(ccx-arrowX-arrowLength)<=3)&&(Math.abs(ccy-arrowY)<=3))
                       {
                          score=score+10;
                           document.getElementById("targetz").innerHTML="<b>hurray!<b>"; 
                           
                        }      
                           
                        
                   
                     if((Math.abs(heartx-arrowX-arrowLength)<5)&&(Math.abs(hearty-arrowY)<5))
                       img=document.getElementById("farcher");
                       if((Math.abs(malex-arrowX-arrowLength)<5)&&(Math.abs(maley-arrowY)<5))
                       img=document.getElementById("archer");  


                     document.getElementById("score").innerHTML=score;
                      document.getElementById("arrowsused" ).innerHTML=gamecount;              
                           
                      }
                   if(gamecount==10) 
                      {clearInterval(interval);
                       document.getElementById("targetz").innerHTML="<b>GAME OVER</b>"+"<br />"+"Score="+score}                                                  
             
   
                  }//this is where the actual gaming happens





             function shoot(e)
             {
               if(e.keyCode===32)
                 played=true;
               }//to shoot out arrows reading spacebar
             function moveup(e)
               {
                 if(e.keyCode===38)
                {if((arrowY>=0)&&(arrowX==20)&&(gamecount!=10))
  
                    {
                        arrowY-=2;
                        ay=arrowY-10;
                       ctx.drawImage(img,ax,ay,30,30);
                    }
                }                  
  
              }
              function movedown(e)
             {
                 if(e.keyCode===40)
          {if((arrowY<=canvas.height)&&(arrowX==20)&&(gamecount!=10))


                  {
                   arrowY+=2;

                   ay=arrowY-10;
                 ctx.drawImage(img,ax,ay,30,30);
                   }
           }

            }//to move archer up and down
                function drawman()   
    
              {

                 ctx.drawImage(img,ax,ay,30,30);
               }
              function drawheart()
              {
                ctx.drawImage(heart,heartx,hearty,5,5);
               }
               function drawmale()
               {
                  ctx.drawImage(male,malex,maley,5,5)
                }
               function gamepause(e)
                {
                    if(e.keyCode===80)
                      {
                          if(Paused)  
                           Paused=false;
                         else
                          Paused=true;
                     }
                       }

                
         var interval=setInterval(game,100);//set interval to make the movements happen continuously




