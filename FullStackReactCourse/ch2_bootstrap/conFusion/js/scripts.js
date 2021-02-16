$('#mycarousel').carousel({interval: 200});
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
$(document).ready(() => {
    /* Reserve Table Modal */
    $("#reserveBtn").click(() => {
        $("#reserveModal").modal();
        console.log("show modal")
    });

    //X
    $("#closeTableModal").click(() => {
        $("#reserveModal").modal("hide");
    });

    //Cancel Button
    $("#cancelTableBtn").click(() => {
        $("#reserveModal").modal("hide");
    });
    
    /**********************************/
    /* Login Modal */
    $("#loginLink").click(() => {
        $("#loginModal").modal();
    });
    
    //X
    $("#closeModal").click(() => {
        $("#loginModal").modal("hide");
    });
    $("#cancelLoginBtn").click(() => {
        $("#loginModal").modal("hide");
    });

});
