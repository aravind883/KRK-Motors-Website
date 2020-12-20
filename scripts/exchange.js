var sub = "";
var msg = "";

var nameregex = new RegExp("^[a-zA-Z ]+$");
var mobileregex = new RegExp("^[0-9]{10}$");
var emailregex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$");
var vnumregex = new RegExp("^[a-zA-Z0-9 ]+$");

function verifyExchangeInputs(){
    var flag = 0;    

    if(nameregex.test($('#exname').val())) {        
        $("#wname").slideUp();
        flag++;
    }
    else{
        $("#wname").slideDown();
    }

    if(mobileregex.test($('#exmobile').val())) {        
        $("#wmobile").slideUp();
        flag++;
    }
    else{
        $("#wmobile").slideDown();
    }

    if(emailregex.test($('#exemail').val())) {        
        $("#wemail").slideUp();
        flag++;
    }
    else{
        $("#wemail").slideDown();
    }

    if( $("#exaddress").val().length != 0 ){
        $("#waddress").slideUp();
        flag++;
    }
    else{
        $("#waddress").slideDown();
    }

    if( $("#exbikemodel").val().length != 0 ){
        $("#wbikemodel").slideUp();
        flag++;
    }
    else{
        $("#wbikemodel").slideDown();
    }
    
    if( $("#exdist").val().length != 0 ){
        $("#wdist").slideUp();
        flag++;
    }
    else{
        $("#wdist").slideDown();
    }

    if(vnumregex.test($('#exvnumber').val())) {        
        $("#wvnumber").slideUp();
        flag++;
    }
    else{
        $("#wvnumber").slideDown();
    }

    if(document.querySelector("#exdate").value.length == 0){
        $("#wdate").slideDown();
    }
    else{
        $("#wdate").slideUp();
        flag++;
    }

    if( $("#exmessage").val().length != 0 ){
        $("#wmessage").slideUp();
        flag++;
    }
    else{
        $("#wmessage").slideDown();
    }

    
    if(flag==9){
        sub = "Exchange asked by " + $("#exname").val();
        msg = "<table style='border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 719px' class='tg'><colgroup><col style='width: 182px'><col style='width: 537px'></colgroup><thead><tr><th style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:bold;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Name</th><th style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:bold;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exname').value + "</th></tr></thead><tbody><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Mobile Number</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exmobile').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Email Address</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exemail').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Address</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exaddress').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:bold;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Bike Model</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-weight:bold;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exbikemodel').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Kilometers Used</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exdist').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Vehicle Number</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exvnumber').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-style:italic;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Date</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exdate').value + "</td></tr><tr><td style='background-color:#efefef;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;font-style:italic;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>Message</td><td style='background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Verdana, Geneva, sans-serif !important;;font-size:16px;overflow:hidden;padding:8px 8px;text-align:left;vertical-align:top;word-break:normal'>" + document.querySelector('#exmessage').value + "</td></tr></tbody></table>";
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