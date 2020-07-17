// feetToMile

function feetToMile(feet){
     var mile = feet * 0.000189;
     return mile;
}
var nishatMile = feetToMile(5);
console.log(nishatMile);
var rahatMile = feetToMile(2);
console.log(rahatMile);

// woodCalculator

   function woodCalculator(chair,table,bed){
       var chairCount = chair * 1;
       var tableCount = table * 3;
       var bedCount = bed * 5;
       var totalWood = chairCount + tableCount + bedCount;
       return totalWood;
   }
   console.log(woodCalculator(5,4,1));
   console.log(woodCalculator(2,5,2));

   // brickCalculator
var floor;
function brickCalculator(floor){
    var result;
    if(floor <= 10){
      result = 15*floor;
    }

    else if(floor > 10 && floor < 20){
          result = 10*15 + (floor-10)*12;
    }

    else{
        result = 10*15+10*12+(floor-20)*10;
    }

    var totalBrick =1000*result;
    return totalBrick;
}
console.log(brickCalculator(5));


// tinyFriend

var name;
function tinyFriend(name)
{
    var name;
    var smallestName=name[0];
    var min=name[0].length;
    for(var i=1;i<name.length;i++)
    {
var index=name[i];
var perindexLen=name[i].length;
if(perindexLen<min)
{
    min=perindexLen;
    smallestName=index;
}
    }
    return smallestName;
}

var listFriendname=['Fahmida','Parvin','Ritu','Shariya'];
console.log(tinyFriend(listFriendname));

     
