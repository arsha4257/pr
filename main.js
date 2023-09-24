canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();


function circle(){
 ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=4;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

    ctx.beginPath();
   ctx.strokeStyle="black";
   ctx.lineWidth=4;
   ctx.arc(270,210,40,0,2*Math.PI);
   ctx.stroke();

   ctx.beginPath();
   ctx.strokeStyle="red";
   ctx.lineWidth=4;
   ctx.arc(290,210,40,0,2*Math.PI);
   ctx.stroke();

   ctx.beginPath();
   ctx.strokeStyle="yello";
   ctx.lineWidth=4;
   ctx.arc(260,220,40,0,2*Math.PI);
   ctx.stroke();

   ctx.beginPath();
   ctx.strokeStyle="green";
   ctx.lineWidth=4;
   ctx.arc(280,220,40,0,2*Math.PI);
   ctx.stroke();
   
   
   }