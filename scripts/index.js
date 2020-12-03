var sub = "";
var msg = "";

var nameregex = new RegExp("^[a-zA-Z ]+$");
var mobileregex = new RegExp("^[0-9]{10}$");
var emailregex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$");


function verifyTestRide(){     
    var flag = 0;
    if ( nameregex.test( $("#trname").val() ) ) {        
        $("#wname").slideUp();
        flag++;
    }
    else{
        $("#wname").slideDown();
    }
    if ( mobileregex.test( $("#trmobile").val() ) ) {        
        $("#wmobile").slideUp();
        flag++;
    }
    else{
        $("#wmobile").slideDown();
    }
    if (document.querySelector("#bikeddlist").value.length != 0) {        
        $("#wbikemodel").slideUp();
        flag++;
    }
    else{
        $("#wbikemodel").slideDown();
    }
    if( document.querySelector("#trdate").value.length == 0 || document.querySelector("#trtime").value.length == 0){
        $("#wdatetime").slideDown();
    }
    else{
        $("#wdatetime").slideUp();
        flag++;
    }

    if(flag==4){        
        sub = "Test Ride Booked by " + $("#trname").val();
        msg = "<h3 style='font-size: 20px;'><strong>The following customer has booked a test ride</strong></h3><table class='tg' style='border-collapse: collapse; border-spacing: 0px; table-layout: fixed; width: 608px; height: 80px;'><colgroup><col style='width: 154px;' /><col style='width: 454px;' /></colgroup><thead><tr style='height: 16px;'><th style='background-color: #efefef; font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 142.8px;'>Name</th><th style='background-color: #fcfcfc; font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 442.8px;'>" + document.querySelector('#trname').value + "</th></tr></thead><tbody><tr style='height: 16px;'><td style='background-color: #efefef; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 142.8px;'>Mobile Number</td><td style='background-color: #fcfcfc; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 442.8px;'>" + document.querySelector('#trmobile').value + "</td></tr><tr style='height: 16px;'><td style='background-color: #efefef; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 142.8px;'>Bike Model</td><td style='background-color: #fcfcfc; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 442.8px;'>" + document.querySelector('#bikeddlist').value + "</td></tr><tr style='height: 16px;'><td style='background-color: #efefef; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 142.8px;'>Date</td><td style='background-color: #fcfcfc; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 442.8px;'>" + document.querySelector('#trdate').value + "</td></tr><tr style='height: 16px;'><td style='background-color: #efefef; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 142.8px;'>Time</td><td style='background-color: #fcfcfc; font-family: Arial, sans-serif; font-size: 14px; overflow: hidden; padding: 10px 5px; text-align: left; vertical-align: top; word-break: normal; border: 1px solid #ffffff; height: 16px; width: 442.8px;'>" + document.querySelector('#trtime').value + "</td></tr></tbody></table>";
        displayPrompt();
    }
}

function verifyMessage(){
    
    var flag = 0;
    if ( nameregex.test( $("#mname").val() ) ) {        
        $("#mnamelabel").slideUp();
        flag++;
    }
    else{
        $("#mnamelabel").slideDown();
    }

    if ( emailregex.test( $("#memail").val() ) ) {        
        $("#memaillabel").slideUp();
        flag++;
    }
    else{
        $("#memaillabel").slideDown();
    }

    if(document.querySelector("#mmessage").value.length == 0){
        $("#mmessagelabel").slideDown();
    }
    else{
        $("#mmessagelabel").slideUp();
        flag++;
    }    

    if(flag==3){
        sub = $("#mname").val() + " sent you a message, from website";
        msg = "<div style='font-family: sans-serif;'><div style='font-size: 20px;'>You&apos;ve got a message!<br/><br/></div><div style='padding : 15px; background-color : #eeeeee; width: fit-content; min-width:250px; border-radius : 15px;'><div style='font-size: 20px;'><span style='font-weight: 600;'>" + document.querySelector("#mname").value + "	</span><br/><span style='font-size: 15px;'>" + document.querySelector("#memail").value + "</span></div><hr/><p>" + document.querySelector("#mmessage").value + "</p></div></div>";
        displayPrompt();
    }
}


function displayPrompt(){    
    $("#prompt").css("display", "flex").hide().fadeIn();
    $("#promptbox").slideDown();
}

function sendEmail(){
    if(grecaptcha.getResponse().length == 0) 
    { 
        $("#captchawarning").slideDown();    
    }
    else{
        $("#captchawarning").slideUp();  
        if( sub.length != 0 && msg.length != 0){            
            sendemail(sub, msg);  
            sub = "";
            msg = "";
            
            clearTestDriveInputs();
            clearMessageInputs();
            closePrompt(displaySPrompt());
        }     
        else{
            alert("Email Requirements not met");
        }   
    }
}

function closePrompt(){    
    $("#captchawarning").slideUp();  
    $("#prompt").fadeOut();
    $("#promptbox").slideUp();      
    grecaptcha.reset();
}

function clearTestDriveInputs(){
    var name = document.querySelector("#trname");
    var mobile = document.querySelector("#trmobile");
    var bikemodel = document.querySelector("#bikeddlist");
    var date = document.querySelector("#trdate");
    var time = document.querySelector("#trtime");

    name.value = "";
    mobile.value = "";
    bikemodel.value = "";
    date.value = "";
    time.value = "";

    $("wname").slideUp();
    $("wbikemodel").slideUp();
    $("wbikemodel").slideUp();
    $("wdatetime").slideUp();


}
function clearMessageInputs(){
    var name = document.querySelector("#mname");
    var email = document.querySelector("#memail");
    var message = document.querySelector("#mmessage");
    name.value = "";
    email.value = "";
    message.value = "";

    $("#mnamelabel").slideUp();
    $("#memaillabel").slideUp();
    $("#mmessagelabel").slideUp();

}



function displaySPrompt(){
    $("#sprompt").css("display", "flex").hide().fadeIn();
}

function closeSPrompt(){
    $("#sprompt").fadeOut();
}

$(window).on('load', function() {
    $("#splashscreen").fadeOut();
});