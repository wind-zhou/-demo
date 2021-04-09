$(function() {
    $.fn.extend({
        //1、封装侧导航
        slideNav: function() {
            $(this).children("h3").click(function() {
                var state = $(this).next("ul").css("display")
                if (state == "block") {
                    $(this).next("ul").slideUp()
                } else {
                    $(this).next().slideDown().siblings("ul").slideUp();
                }
            })
        },


    })

})