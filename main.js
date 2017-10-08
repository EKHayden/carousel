//The user can click on either the "skip" or "back " button. If the user clicks "skip", the count of the image (array element) must increase by one. If the user clicks "back", the count of the image must decrease by one.
$(document).ready(function(){

  //$(".btn").on("click", function(){
    //count++;
  //});

  $(".btn[value='Skip']").on("click", function(){
    if(count<images.length-1){
      count++;

    }else{
      count=0;

    }
    $("img").attr("src", images[count]);
  });

  $(".btn[value='Back']").on("click", function(){
    if(count >= 1){
      count--;

    }else{
      count=images.length-1;

    }
    $("img").attr("src", images[count]);
  });
});
var images=["images/food1.jpg","images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"];
//images.forEach(function(item, index, array) {
  //console.log(item, index);
var count = 0;
