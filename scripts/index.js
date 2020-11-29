var sub = "";
var msg = "";


function verifyTestRide(){     
    if(document.querySelector("#trname").value.length == 0){
        $("#wname").slideDown();
    }
    if(document.querySelector("#trmobile").value.length == 0){
        $("#wmobile").slideDown();
    }
    if(document.querySelector("#bikeddlist").value.length == 0){
        $("#wbikemodel").slideDown();
    }
    if(document.querySelector("#trdate").value.length == 0 || document.querySelector("#trtime").value.length == 0){
        $("#wdatetime").slideDown();
    }

    if(document.querySelector("#trname").value.length != 0){
        $("#wname").slideUp();
    }
    if(document.querySelector("#trmobile").value.length != 0){
        $("#wmobile").slideUp();
    }
    if(document.querySelector("#bikeddlist").value.length != 0){
        $("#wbikemodel").slideUp();
    }
    if(document.querySelector("#trdate").value.length != 0 && document.querySelector("#trtime").value.length != 0){
        $("#wdatetime").slideUp();
    }

    if(document.querySelector("#trname").value.length != 0 && document.querySelector("#trmobile").value.length != 0 && document.querySelector("#bikeddlist").value.length != 0 && document.querySelector("#trdate").value.length != 0 && document.querySelector("#trtime").value.length != 0){              
        sub = "Test Ride Booking";
        msg = "<h1>Test Ride Booking</h1><table style='text-decoration:none; font-family : calibri'><tr><td style='width : 40%;'>Name</td><td style='width : 40%;'>" + document.querySelector("#trname").value + "</td></tr><tr><td style='width : 40%;'>Mobile</td><td style='width : 40%;'>" + document.querySelector("#trmobile").value + "</td></tr><tr><td style='width : 40%;'>Bike Model</td><td style='width : 40%;'>" + document.querySelector("#bikeddlist").value + "</td></tr><tr><td style='width : 40%;'>Date</td><td style='width : 40%;'>" + document.querySelector("#trdate").value + "</td></tr><tr><td style='width : 40%;'>Time</td><td style='width : 40%;'>" + document.querySelector("#trtime").value + "</td></tr></table>";
        displayPrompt();
    }
}

function verifyMessage(){
    if(document.querySelector("#mname").value.length == 0){
        $("#mnamelabel").slideDown();
    }
    if(document.querySelector("#memail").value.length == 0){
        $("#memaillabel").slideDown();
    }
    if(document.querySelector("#mmessage").value.length == 0){
        $("#mmessagelabel").slideDown();
    }

    if(document.querySelector("#mname").value.length != 0){
        $("#mnamelabel").slideUp();
    }
    if(document.querySelector("#memail").value.length != 0){
        $("#memaillabel").slideUp();
    }
    if(document.querySelector("#mmessage").value.length != 0){
        $("#mmessagelabel").slideUp();
    }

    if(document.querySelector("#mname").value.length != 0 && document.querySelector("#memail").value.length != 0 && document.querySelector("#mmessage").value.length != 0){
        sub = "Message";
        msg = "<h1>Message</h1><table style='text-decoration:none; font-family : calibri'><tr><td style='width : 40%;'>Name</td><td style='width : 40%;'>" + document.querySelector("#mname").value + "</td></tr><tr><td style='width : 40%;'>Email</td><td style='width : 40%;'>" + document.querySelector("#memail").value + "</td></tr><tr><td style='width : 40%;'>Message</td><td style='width : 40%;'>" + document.querySelector("#mmessage").value + "</td></tr></table>";
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
            sendemailsmtp(sub, msg);  
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