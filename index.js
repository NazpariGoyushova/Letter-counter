var number=document.getElementById("number");
var text=document.getElementById("text");
var limit=60;
number.textContent= 0 +"/"+limit;

text.addEventListener("input",function(){ 
  var count= text.value.length;
  number.textContent= count+"/"+limit;
 
if(count>limit){
  text.style.borderColor="red";
  number.style.color="red";
}
else{
 number.style.color="green";
 text.style.borderColor="green";

}});