$(document).ready(function(){

    let email = true;
    let first = false;
    let last = false;


    $("#emailMandatory").hide();
    if($("#mediaChannelSelect").val() === "Other") 
        $("#otherMediaChannel").show();
    else $("#otherMediaChannel").hide();
    submit();


    $("#firstName").change(function(){
        if($("#firstName").val() !== "") {
            $("#firstNameMandatory").hide();
            first = true;
        }
        else{
            $("#firstNameMandatory").show();
            first = false;
        }
        submit();
    });


    $("#lastName").change(function(){
        if($("#lastName").val() !== "") {
            $("#lastNameMandatory").hide();
            last = true;
        }
        else{
            $("#lastNameMandatory").show();
            last = false;
        }
        submit();
    });

    $("#mediaChannelSelect").change(function(){
        if($("#mediaChannelSelect").val() === "Other") {
            $("#otherMediaChannel").show();
        } else {
           //  console.log($("mediaChannelSelect").val());
            $("#otherMediaChannel").hide();
        }
        submit();
    });

    $("#mediaChannelSelect").change(function(){
        if($("#mediaChannelSelect").val() === "Other") {
            $("#otherMediaChannel").show();
        } else {
           //  console.log($("mediaChannelSelect").val());
            $("#otherMediaChannel").hide();
        }
        submit();
    });

    $("#newsletter").change(function(){
        console.log($("#newsletter").val());
        if($("#newsletter").is(":checked")) {
            if($("#email").val() === "") {
                $("#emailMandatory").show();
                email = false;
            }
        } else {
            $("#emailMandatory").hide();
            email = true;
        }
        submit();
    });

    $("#email").change(function(){
        if($("#email").val() === "") {
            if($("#newsletter").is(":checked")) {
                $("#emailMandatory").show();
                email = false;
            }
        } else {
            $("#emailMandatory").hide();
            email = true;
        }
        submit();
    });
    
    function submit() {
        if(first && last && email) $(".btn").show();
        else $(".btn").hide();
    }

});