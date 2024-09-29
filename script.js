var result =document.getElementById("result")
function mani(event){
  event.preventDefault(); // Prevent the form from submitting
  var anbu = document.getElementById("anbu")
  var bot = anbu.value
  if(bot=="anbu")
{
  result.innerHTML = "You are a gay"
}
else
{
  result.innerText = "Anbu is a gay"
}
}