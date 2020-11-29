function verifybookingdetails(){
    var flag = 0;
    var nameregex = new RegExp("^[a-zA-Z ]+$");
    var mobileregex = new RegExp("^[0-9]{10}$");
    var emailregex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$");
    
    if ( nameregex.test( $("#bookingname").val() ) ) {        
        $("#bookingnamewarning").slideUp();
        flag++;
    }
    else{
        $("#bookingnamewarning").slideDown();
    }


    if ( mobileregex.test( $("#bookingmobile").val() ) ) {        
        $("#bookingmobilewarning").slideUp();
        flag++;
    }
    else{
        $("#bookingmobilewarning").slideDown();
    }


    if ( emailregex.test( $("#bookingemail").val() ) ) {        
        $("#bookingemailwarning").slideUp();
        flag++;
    }
    else{
        $("#bookingemailwarning").slideDown();
    }

    if( $("#bookingplace").val().length != 0 ){
        $("#bookingcitywarning").slideUp();
        flag++;
    }
    else{
        $("#bookingcitywarning").slideDown();
    }

    if(flag==4){
        
        $(".bookingpopup").fadeOut();
        $('.bookingpopupbox').fadeOut();

        $(".roboverificationtint").fadeIn();
        $(".roboverificationtint").css("display","flex");
        
        $(".roboverificationbox").fadeIn();
    }
}

function verifyHuman(){
    if(grecaptcha.getResponse().length == 0) 
    { 
        $('.captchawarning').slideDown();
    }
    else{
        $('.captchawarning').slideUp();

        var sub = "Bike Booked by " + $('#bookingname').val();
        var msg = "<table style='border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 591px' class='tg'><colgroup><col style='width: 149px'><col style='width: 442px'></colgroup><tbody><tr><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:'Trebuchet MS', Helvetica, sans-serif !important;font-size:24px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal' colspan='2'><span style='font-weight:bold'>The following customer has booked a bike</span></td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Name</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingname').val() +"</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Mobile Number</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingmobile').val() +"</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Email</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingemail').val() +"</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Address</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingplace').val() +"</td></tr><tr><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal' colspan='2'></td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Bike Name</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingbikename').text() +"</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Bike Color</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingbikecolor').children('option:selected').val() +"</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>Bike Variant</td><td style='background-color:#fcfcfc;border-color:#f2f2f2;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal'>"+ $('#bookingbikelist').children('option:selected').val() +"</td></tr></tbody></table>";
        
        sendemail(sub, msg);
    }
}

function customerdetails(){
    $(".bookingpopup").fadeIn(function(){
        $('.bookingpopupbox').fadeIn();
    });
}

function getbikedetails(){
    $(".yourbike").fadeIn(function(){
        $('.yourbikebox').fadeIn();
    });
}

function closebookingbox(){
    $(".bookingpopup").fadeOut();
    $('.bookingpopupbox').fadeOut(function(){

        $(".bookinginput").val("");
        $(".bookinginputbox").val("");

        $("#bookingnamewarning").slideUp();
        $("#bookingmobilewarning").slideUp();
        $("#bookingemailwarning").slideUp();
        $("#bookingcitywarning").slideUp();

        $(".bookinglabel").css({
            "color" : "#949494",
            "font-family" : "'Ubuntu', sans-serif",
            "position" : "absolute",
            "top" : "50",
            "left" : "10",
            "font-size" : "15px"
        });

    });

}

function closebikebox(){
    $(".yourbikebox").fadeOut();
    $('.yourbike').fadeOut();
}


function closerobobox(){
    $(".roboverificationtint").fadeOut();
    $('.roboverificationbox').fadeOut();
}



$("#bikebutton").click(function(){
    closebikebox();
    customerdetails(); 
});

$(".variantheadsm").click(function(){
    $(".featuressm:eq(" + $(".variantheadsm").index($(this)) + ")").slideToggle();
    $(".featuretopicsm:eq(" + $(".variantheadsm").index($(this)) + ")").slideToggle();
    $(".variantheadsm i:eq(" + $(".variantheadsm").index($(this)) + ")").toggleClass("fa-chevron-up");
    $(".variantheadsm i:eq(" + $(".variantheadsm").index($(this)) + ")").toggleClass("fa-chevron-down");
});

$("input").focus(function(){
   $(".bookinglabel:eq(" + $("input").index($(this)) + ")").css({
       "color" : "#00cc4e",
       "position" : "absolute",
       "top" : "10",
       "left" : "3",
       "font-size" : "16px"
   });
});

$("input").focusout(function(){
   if($(this).val().length == 0){
       $(".bookinglabel:eq(" + $("input").index($(this)) + ")").css({
           "color" : "#949494",
           "font-family" : "'Ubuntu', sans-serif",
           "position" : "absolute",
           "top" : "50",
           "left" : "10",
           "font-size" : "15px"
       });
   }
   else{
       $(".bookinglabel:eq(" + $("input").index($(this)) + ")").css({
           "color" : "#00cc4e",
           "position" : "absolute",
           "top" : "10",
           "left" : "3",
           "font-size" : "16px"
       });
   }
});


$("#bookingplace").focus(function(){
    $(".bookinglabel:eq(3)").css({
        "color" : "#00cc4e",
        "position" : "absolute",
        "top" : "10",
        "left" : "3",
        "font-size" : "16px"
    });
 });



$("#bookingplace").focusout(function(){
    if($(this).val().length == 0){
        $(".bookinglabel:eq(3)").css({
            "color" : "#949494",
            "font-family" : "'Ubuntu', sans-serif",
            "position" : "absolute",
            "top" : "50",
            "left" : "10",
            "font-size" : "15px"
        });
    }
    else{
        $(".bookinglabel:eq(3)").css({
            "color" : "#00cc4e",
            "position" : "absolute",
            "top" : "10",
            "left" : "3",
            "font-size" : "16px"
        });
    }
 });

function displaySPrompt(){
    closerobobox();
    $("#sprompt").css("display", "flex").hide().fadeIn();
}

function closeSPrompt(){
    $("#sprompt").fadeOut();
}


$(window).on('load', function() {
    $(".loadingtint").fadeOut();
});