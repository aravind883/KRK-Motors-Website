var sub = "";
var msg = "";

var nameregex = new RegExp("^[a-zA-Z ]+$");
var mobileregex = new RegExp("^[0-9]{10}$");
var emailregex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$");
var vnumregex = new RegExp("^[a-zA-Z0-9 ]+$");

function verifyServiceInputs(){
    var flag = 0;
    

    if(nameregex.test($('#sname').val())) {        
        $("#wname").slideUp();
        flag++;
    }
    else{
        $("#wname").slideDown();
    }

    if(mobileregex.test($('#smobile').val())) {        
        $("#wmobile").slideUp();
        flag++;
    }
    else{
        $("#wmobile").slideDown();
    }

    if(emailregex.test($('#semail').val())) {        
        $("#wemail").slideUp();
        flag++;
    }
    else{
        $("#wemail").slideDown();
    }

    if (document.querySelector("#bikeddlist").value.length != 0) {        
        $("#wbikemodel").slideUp();
        flag++;
    }
    else{
        $("#wbikemodel").slideDown();
    }

    if( $("#saddress").val().length != 0 ){
        $("#waddress").slideUp();
        flag++;
    }
    else{
        $("#waddress").slideDown();
    }

    if(vnumregex.test($('#svnumber').val())) {        
        $("#wvnumber").slideUp();
        flag++;
    }
    else{
        $("#wvnumber").slideDown();
    }

    if (document.querySelector("#branchddlist").value.length != 0) {        
        $("#wbranch").slideUp();
        flag++;
    }
    else{
        $("#wbranch").slideDown();
    }

    if( document.querySelector("#sdate").value.length == 0 || document.querySelector("#stime").value.length == 0){
        $("#wdatetime").slideDown();
    }
    else{
        $("#wdatetime").slideUp();
        flag++;
    }

    
    if(flag==8){
        sub = "Service Booked by " + $("#sname").val();
        msg = "<h3 style='font-size: 20px;'><strong>The following customer has booked service</strong></h3><table style='border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 703px' class='tg'><colgroup><col style='width: 178px'><col style='width: 525px'></colgroup><thead><tr><th style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:bold;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Name</th><th style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:normal;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#sname').value + "</th></tr></thead><tbody><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Mobile Number</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#smobile').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Email Address</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#semail').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Address</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#saddress').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Bike Model</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#bikeddlist').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Vehicle Number</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#svnumber').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Branch</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#branchddlist').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Date</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#sdate').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Time</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#stime').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Message</td><td style='background-color:#f8f8f8;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#smessage').value + "</td></tr></tbody></table>";
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
            
            clearServiceInputs();
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


function displaySPrompt(){
    $("#sprompt").css("display", "flex").hide().fadeIn();
}

function closeSPrompt(){
    $("#sprompt").fadeOut();
}

function clearServiceInputs(){
    var name = document.querySelector("#sname");
    var mobile = document.querySelector("#smobile");
    var email = document.querySelector("#semail");
    var address = document.querySelector("#saddress");
    var bikemodel = document.querySelector("#bikeddlist");
    var vnumber = document.querySelector("#svnumber");
    var branch = document.querySelector("#branchddlist");
    var date = document.querySelector("#sdate");
    var time = document.querySelector("#stime");
    var message = document.querySelector("#smessage");

    name.value = "";
    mobile.value = "";
    email.value = "";
    address.value = "";
    bikemodel.value = "";
    vnumber.value = "";
    branch.value = "";
    date.value = "";
    time.value = "";
    message.value = "";

    $("wname").slideUp();
    $("wbikemodel").slideUp();
    $("wbikemodel").slideUp();
    $("wdatetime").slideUp();
}