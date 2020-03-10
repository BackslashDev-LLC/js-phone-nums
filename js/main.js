$("#first-button").on("click", function() {
    var value = $("#first-input").val()

    var result = formatPhoneNumber(value);    

    if(result === "(123)456-7890"){
        $("#first-result").addClass("valid");
    }else{
        $("#first-result").removeClass("valid");
    }

    $("#first-result").html(result + " looking for '(123)456-7890'");
});

$("#second-button").on("click", function() {
    var value = $("#second-input").val()

    var result = formatPhoneNumber(value);

    if(result === "INVALID"){
        $("#second-result").addClass("valid");
    }else{
        $("#second-result").removeClass("valid");
    }

    $("#second-result").html(result + " looking for 'INVALID`");
});

$("#third-button").on("click", function() {
    var value = $("#third-input").val()

    var result = formatPhoneNumber(value);
    
    if(result === "(456)454-1123)"){
        $("#third-result").addClass("valid");
    }else{
        $("#third-result").removeClass("valid");
    }

    $("#third-result").html(result + " looking for '(456)454-1123");
});

function formatPhoneNumber(input){
    return "NOT IMPLEMENTED";
}

