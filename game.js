function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    
for(var i=0;i<25;i+=1){
    document.getElementById(i+1).innerHTML=ranNums[i];
}


var name = localStorage.getItem('name',name);
document.getElementById("order").innerHTML=name;
/* Searching for button id with reference to innerhtml elememt */
    

// function to retutn button i
function crtlist(array) {
    
    var order = [];
    var ind=1;
    while(ind<=array.length){
    var p=array.indexOf(ind);
    order.push(p+1);
    ind+=1;
  }
    return order;
}
// add color
var f=0;
for(var c=0;c<25;c++){
    document.getElementById(c+1).style.filter="blur(fpx)";
    f++;
}
var right_order = crtlist(ranNums);
var start = document.getElementById(right_order[0]);
var end = document.getElementById(right_order[24]);
var i=0,
    j=0;


function retid(clicked) { 
    var butid=clicked;
    
    if(butid == right_order[i]){
        document.getElementById(butid).style.visibility="hidden";
        i++;
        document.getElementById("btpress").play();
        if(i==25 && j < 6){
          for(var p=0;p<25;p++){
            document.getElementById(p+1).style.visibility="visible";
            i = 0;
          }
          
          end.addEventListener("click", sw.init);
          
            j++;
    } 
}  
}



// code for stop watch
var timearr = [];
var sw = {
    
    etime : null,
    erst : null,
    timer : null,
    now : 0,
    init : function () {
    
      sw.etime = document.getElementById("sw-time");
    
      start.addEventListener("click", sw.start);
    },
  
    
    tick : function () {
    

      
      sw.now++;
      var remain = sw.now;
      var mins = Math.floor(remain / 6000);
      remain -= mins * 6000;
      var secs = Math.floor(remain / 100);
      remain -= secs * 100;
      var msecs = remain;
  
      
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      if (msecs<10) { msecs = "0" + msecs; }
  
      sw.etime.innerHTML = mins + ":" + secs + ":" + msecs;
    },
  
    start : function () {

  
      sw.timer = setInterval(sw.tick,10);
     
      end.addEventListener("click", sw.stop);
    },
  
    stop  : function () {
    
  
      clearInterval(sw.timer);
      timearr.push(sw.etime.innerHTML)
      localStorage.setItem("timing", JSON.stringify(timearr));
      var show = JSON.parse(localStorage.getItem("timing"));
      document.getElementById("laps").innerHTML=show ;
      sw.reset();
    },

    reset : function () {
        sw.now = -1;
        sw.tick();
      }
  };
 
  window.addEventListener("load", sw.init);