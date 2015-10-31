
//Discovering on which element pressing
function whichElement(e) {
    var targ;
    if (!e) {
         e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }
    var tname = targ.id;
    var element = document.getElementById(tname);
//if elements are zeros
    if(element === undefined||element === null)return;

    //return tname;
    select(tname);
};
//creating grid array
var grid = [[0,0,0],
            [0,0,0],
            [0,0,0]];
//initializing start variable this suggests who starts first
var move = 1;

var select = function(id){
         //slicing to one number to identify which cell
      var col = id.slice(1);
   var row = id.slice(0,1)
   //checking if not already selected
   if(grid[col-1][row-1]===0){
   var element =  document.getElementById(id);
   //getting player number
   var player = whosTurn();

   grid[col-1][row-1] = player;
   console.log(player);
   console.log(grid);
   //depending on whichs players turn setting image acordingly
   if(player===1)  element.src = 'img/x.jpg';
   if(player===2)  element.src = 'img/o.jpg';
   console.log(id);
//checking who won
   checkWin();
}
};


var whosTurn = function(){
    if(move===1){
        move = 2;
        return 2;
    }
    else{
        move = 1;
     return 1;
 }
};
var checkWin = function(){
    if(grid[0][0]!==0 &&grid[0][0]===grid[0][1]&&grid[0][1]===grid[0][2]) alert(grid[0][0]);
    else if(grid[1][0]!==0 && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) alert(grid[1][0]);
    else if(grid[2][0]!==0 &&grid[2][0]===grid[2][1]&&grid[2][1]===grid[2][2]) alert(grid[2][0]);

    else if(grid[0][0]!==0 &&grid[0][0]===grid[1][0]&&grid[1][0]===grid[2][0]) alert(grid[0][0]);
    else if(grid[0][1]!==0 &&grid[0][1]===grid[1][1]&&grid[1][1]===grid[2][1]) alert(grid[0][1]);
    else if(grid[0][2]!==0 &&grid[0][2]===grid[1][2]&&grid[1][2]===grid[2][2]) alert(grid[0][2]);

    else if(grid[0][0]!==0 &&grid[0][0]===grid[1][1]&&grid[1][1]===grid[2][2]) alert(grid[0][0]);
    else if(grid[2][0]!==0 &&grid[2][0]===grid[1][1]&&grid[1][1]===grid[0][2]) alert(grid[2][0]);
};