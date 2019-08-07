$( document ).ready(function() {
    $(".first-audio").on("ended", function(){
        $(".second-audio").get(0).play();
    });
});
