//Js Document
//var kiwi1 = $('#image3').position();
//alert(kiwi1.left);
$('document').ready(function(){
    $('.kiwi > img').fadeTo("slow",0.2);
    $('#image5').fadeTo(400,1.0);
    $('#click').click(function(){
    
        $('.kiwi1').animate({left:400,top:150},1000).promise().done(function(){
            $('.chirp1').fadeOut(100).animate({left:1500,top:1250},200).html('Bhagat Singh').fadeIn(500);
            $(this).delay(2500);

            $('#image4').fadeTo(400,1.0);
            $(this).animate({left:600,top:520},1000).promise().done(function(){
                $('.chirp1').fadeOut(100).animate({left:1200,top:600},200).html('Sardar Vallabhbhai Patel').fadeIn(500);
              $(this).delay(2500);

                $('#image7').fadeTo(400,1.0);
                $(this).animate({left:150,top:180},1000).promise().done(function(){
                    $('.chirp1').fadeOut(100).animate({left:2000,top:1000},200).html('Rani Laxmi Bai').fadeIn(500);
                    $(this).delay(2500);

                    $('#image1').fadeTo(400,1.0);
                    $(this).animate({left:1050,top:250},1000).promise().done(function(){
                        $('.chirp1').fadeOut(100).animate({left:800,top:1000},200).html('Chandrasekhar Azad').fadeIn(500);
                        $(this).delay(2500);

                        $('#image3').fadeTo(400,1.0);
                        $(this).animate({left:260,top:430},1000).promise().done(function(){
                            $('.chirp1').fadeOut(100).animate({left:2000,top:800},200).html('Subhash Chandra Bose').fadeIn(500);
                            $(this).delay(1500);

                            $('#image2').fadeTo(400,1.0);
                            $(this).animate({left:650,top:100}).promise().done(function(){
                                $('.chirp1').fadeOut(100).animate({left:1400,top:1300},200).html('Ramprasad Bismil').fadeIn(500);
                                $(this).delay(1500);

                                $('#image6').fadeTo(400,1.0);
                                $(this).animate({left:1000,top:420},1000).promise().done(function(){
                                    $('.chirp1').fadeOut(100).animate({left:800,top:700},200).html('Vande Matram..<br>Jai Hind..<br><a >"Happy Independence Day"</a>').fadeIn(500);
                                    $(this).delay(1500);

                                    $('#image8').fadeTo(400,1.0);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});