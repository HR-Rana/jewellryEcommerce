$(".btn-success").click(function(){
   alert("Please Add Your Banking Card")
    $('.Shopping-page').hide(200);
    $('')
})




$('.cross i').click(function(){
    $('.Bank-Card-area').hide(200);
  })
     $('.cardNumber .submit').click(function(){
    $('.Bank-Card-area').hide(500);
    alert("Thanks for your Card Number,  Happy Shopping")

  })


  
  $(".card .btn-danger1").click(function(){
    $('.Shopping-page .card1').hide(100);
  });
  $(".card .btn-danger2").click(function(){
    $('.Shopping-page .card2').hide(100);
  });
  $(".card .btn-danger3").click(function(){
    $('.Shopping-page .card3').hide(100);
  });
  $(".card .btn-danger4").click(function(){
    $('.Shopping-page .card4').hide(100);
  });



    $(".addCard").click(function(){
    $('section').hide();
    $(".Shopping-page").show(300);
     });
      $(".listed-product").click(function(){
    $('section').hide();
    $(".Shopping-page").show(300);
    $('').hide();
     });
     
     $(".addBank").click(function(){
    $(".Bank-Card-area").show(300);
     });


