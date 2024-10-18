


function Service(title, price){
    this.title=title;
    this.price=price;
}

function isValid(service){
    let isValidTitle=true;
    let isValidPrice=true;

    if(service.title==""){
        isValidTitle=false;
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color", "red").show();
    } else{
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
        isValidTitle=true;
    }

    if(service.price==""){
        isValidTitle=false;
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color", "red").show();
    } else{
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
        isValidPrice=true;
    }
    return isValidPrice && isValidTitle;
}



function register(){
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();

    // console.log("Title:"+inputTitle);
    // console.log("Price:"+inputPrice);
    let newService = new Service(inputTitle, inputPrice);
    console.log("is valid? ", isValid(newService));

    if(isValid(newService)){
        console.log(newService);
    }

}

function init(){
    $("#btnRegister").click(register);
    $( "#txtPrice" ).on("keypress", function(event){
        if(event.which ==13)
{
        }
    });
}

window.onload=init;