var mynumber = 0;

function myfunction(){
  var text = document.getElementById('mytext').value;
    
    
    mynumber = mynumber + text;
    
    document.getElementById('output').innerhtml = mynumber + text
}

var newoutput = '';

function newtext(thing)
{
 console.log(thing);
}