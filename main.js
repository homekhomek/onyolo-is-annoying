

function startAnim() {
  setTimeout(function (){
    document.getElementById("innerLoad").style.width = "20%";
    setTimeout(function (){
      document.getElementById("innerLoad").style.width = "65%";
      setTimeout(function (){
        document.getElementById("innerLoad").style.width = "90%";
        setTimeout(function (){
          document.getElementById("innerLoad").style.width = "100%";
          setTimeout(function (){
            document.getElementById("outerLoad").style.opacity = "0";
            document.getElementById("outerLoad").style.top = "60%";
            
            document.getElementById("msg").style.opacity = "1";
            document.getElementById("msg").style.top = "40vh";
          },1000);
        },1000);
      },2000);
    },1000);
  },1000);
}

startAnim();