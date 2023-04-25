// TEAM A's CODE
// Answered by Roshan. Well done!
var whatTimeIsIt = function(angle) {
  mins = angle*2;
  h = Math.floor(mins / 60);
  m = Math.floor(mins % 60);
  if (h==0) {h = "12"}
  if (h<10) {h = "0"+h}
  if (m<10) {m = "0"+m}
  return h + ":" + m;
}