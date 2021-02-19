$('#mycarousel').carousel({interval: 2000});
$('#carouselButton').click(function(){
    if($('#carouselButton').children('span').hasClass('fa-pause')){
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play')
    }
    else{
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause')
    }
});

//Assignment 4  
$(() => {
    /* Reserve Table Modal */
    $("#reserveBtn").on("click", () => {
        $("#reserveModal").modal();
        console.log("show modal")
    });

    //X
    $("#closeTableModal").on("click",() => {
        $("#reserveModal").modal("hide");
    });

    //Cancel Button
    $("#cancelTableBtn").on("click",() => {
        $("#reserveModal").modal("hide");
    });
    
    /**********************************/
    /* Login Modal */
    $("#loginLink").on("click",() => {
        $("#loginModal").modal();
    });
    
    //X
    $("#closeModal").on("click",() => {
        $("#loginModal").modal("hide");
    });
    $("#cancelLoginBtn").on("click",() => {
        $("#loginModal").modal("hide");
    });

});
