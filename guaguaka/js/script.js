(function () {
    "use strict";

    var cbox,ctx,ismousedown,isharf = false;

    var fontem = parseInt(window.getComputedStyle(document.documentElement, null).getPropertyValue("font-size"));

    window.onload = function () {
        cbox = document.getElementById("mycanvas");

        cbox.width = cbox.clientWidth;
        cbox.height = cbox.clientHeight;

        ctx=cbox.getContext("2d");

        cbox.addEventListener("mousedown", eventDown, false);
        cbox.addEventListener("mousemove", eventMove, false);
        cbox.addEventListener("mouseup", eventUp, false);

        cbox.addEventListener("touchstart", eventDown, false);
        cbox.addEventListener("touchmove", eventMove, false);
        cbox.addEventListener("touchend", eventUp, false);
        initCanvas();

        function initCanvas() {


            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "#aaaaaa";
            ctx.fillRect(0, 0, cbox.width, cbox.height);
            ctx.fill();
            ctx.font = "Bold 30px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "#999999";
            ctx.fillText("刮一刮",cbox.width/2,cbox.height/2 + 15);

        }

        function eventDown(e) {
            e.preventDefault();
            ismousedown = true;
        }

        function eventMove(e) {
            e.preventDefault();
             if(ismousedown) {
                if(e.changedTouches){
                     e=e.changedTouches[e.changedTouches.length-1];
                }
                // var topY = cbox.offsetTop;
                var oX = cbox.offsetLeft,
                oY = cbox.offsetTop;
                var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0,
                y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;
         
                 //画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
                 //画出来是透明的
                ctx.globalCompositeOperation = "destination-out";
                ctx.beginPath();
                ctx.arc(x, y, fontem*1.2, 0, Math.PI * 2,true);
         
                 // //下面3行代码是为了修复部分手机浏览器不支持destination-out
                 // //我也不是很清楚这样做的原理是什么
                cbox.style.display = 'none';
                 // cbox.offsetHeight;
                cbox.style.display = 'inherit'; 
                ctx.fill();
             }
             if(isharf){
                 var btn = document.getElementsByClassName("btn");
                     for(var i=0; i<btn.length; i++){
                         btn[i].style.zIndex = '3';
                     }
                     document.getElementsByClassName("btn")[0].style.zIndex="3";
             }
        }

        function eventUp(e) {
            e.preventDefault();
            //得到canvas的全部数据
            var a = ctx.getImageData(0,0,cbox.width,cbox.height);
            var j=0;
            for(var i=3;i<a.data.length;i++){

                if(a.data[i]===0){
                    j++;
                }
            }
            //当被刮开的区域等于一半时，则可以开始处理结果
            if(j>=a.data.length/2){
                isharf = true;
            }
            ismousedown = false;
        }
    };

})();