function chirp(num){
  // FIX ME
  if(num === 1){
    return "chirp";
  }
  console.log(num);
  return "chirp " + chirp(--num);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});