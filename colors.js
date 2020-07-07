var Links = {
  setColor:function(color) {
    var alist = document.querySelectorAll('a');
  var i=0;
  while (i < alist.length) {
    alist[i].style.color=color;
    i = i+1;
  }
  
}
}
var Body = {
    setColor:function(color) {
      document.querySelector('body').style.color=color;
    },
    setBackgroundColor:function(color) {
      document.querySelector('body').style.backgroundColor=color;
    }
  }
  function darkLightHandler(self) {
  
if (self.value==='Dark mode') {
  Body.setBackgroundColor('black');
  Body.setColor('white');
  Links.setColor("powderblue");
   self.value='Light mode';
} else {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  Links.setColor("darkblue");
  self.value='Dark mode';
} 
}
