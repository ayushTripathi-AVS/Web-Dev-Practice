var startTime=new Date().getTime();
        function move(){
            var left;
            var top;
            var wh;
            var color;

            left=Math.random()*300 + "px";
            top=Math.random()*300 + "px";
            wh=((Math.random()*400)+100) + "px";

            var red=Math.floor(Math.random()*256);
            var green=Math.floor(Math.random()*256);
            var blue=Math.floor(Math.random()*256);
            color="rgb(" + red + ", " + green + ", " + blue + ")";

            document.getElementById("shape").style.left=left;
            document.getElementById("shape").style.top=top;
            document.getElementById("shape").style.width=wh;
            document.getElementById("shape").style.height=wh;
            document.getElementById("shape").style.backgroundColor=color;
            document.getElementById("shape").style.display="block";
            
            startTime=new Date().getTime();
        }
        
        move();
        
        document.getElementById("shape").onclick=function(){
            document.getElementById("shape").style.display="none";
            var endTime=new Date().getTime();
            var timeTaken=(endTime-startTime)/1000;
            alert(timeTaken+"s");
            move();
        }