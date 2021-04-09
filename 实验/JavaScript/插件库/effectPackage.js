$(function() {
    $.fn.extend({

        //1、侧导航
        // 参数说明：showDom为侧导航每行的展示节点，showNextDom为各个展示块的外层节点注：html结构中，showNextDom需为紧挨着showDom的下一个兄弟
        //    适用的html结构如下：

        //     <div id="slideNav">
        //     <h2>手机</h2>
        //     <div>
        //        ...
        //     </div>

        //     <h2>电脑</h2>
        //     <div class="hide">
        //         <li>huawei</li>
        //         <li>mi</li>
        //         <li>oppo</li>
        //     </div>

        //     <h2>美女</h2>
        //     <div class="hide">
        //        ...
        //     </div>

        //     <h2>学习</h2>
        //     <div class="hide">
        //        ...
        //     </div>



        slideNav: function(showDom, showNextDom) {
            $(this).children(showDom).click(function() {
                var state = $(this).next(showNextDom).css("display")
                if (state == "block") {
                    $(this).next(showNextDom).slideUp()
                } else {
                    $(this).next().slideDown().siblings(showNextDom).slideUp();
                }
            })
        },

        // 2、封装二级菜单
        // 参数说明：firstMenuDom为一级菜单的节点，secondMenuDom为二级菜单的节点 两个参数均可以不写
        // 适用的html结构如下：
        //     <ul id="menuContainer">
        //     <li class="menu_item">
        //         number
        //         <ul class="hide">
        //            ...
        //         </ul>
        //     </li>

        //     <li class="menu_item">
        //         letter
        //         <ul class="hide">
        //            ...
        //         </ul>

        //     </li>
        //     <li class="menu_item">
        //         Operator
        //         <ul class="hide">
        //           ...
        //         </ul>
        //     </li>
        // </ul>

        SecondaryMenu: function(firstMenuDom, secondMenuDom) {
            $(this).children(firstMenuDom).mouseenter(function() {
                $(this).children(secondMenuDom).show()
            }).mouseleave(function() {
                $(this).children(secondMenuDom).hide()
            })
        },
        // 3、封装轮播图
        Carousel: function() {
            function lbt(pointer) {
                var x = pointer.children().css("left")
                if (parseInt(x) >= -800) {
                    pointer.children().animate({
                        "left": "-=400px"
                    }, 500)
                } else {
                    pointer.children().animate({
                        "left": "0px"
                    }, 500)
                }
            };
            setInterval(lbt, 2000, this)
                //几点备注（几个坑）
                // 1、this指针
                // 在Carousel里最开始的this指代jQuery选择器返回的集合， 且就等同于$(this)
                // 但在lbt函数中也会用到该指针， 但需要作为参数传进去， 因为lbt函数内部的this指向了window
                // 2、 setInterval函数的传参方式
                // 是setInterval(lbt, 2000, parms), 不能直接写成setInterval(lbt(this), 2000)
        },


        // 封装中心放大
        centerScale: function(increaseX, increaseY) {
            var translateLeft = increaseX / 2;
            var translateTop = increaseY / 2;
            $(this).click(function() {
                $(".container").animate({
                    "width": "+=" + increaseX + "px",
                    "height": "+=" + increaseY + "px",
                    "left": "-=" + translateLeft + "px",
                    "top": "-=" + translateTop + "px",
                }, 1000)
            })
        },


        // 封装标签页
        //参数说明：conDom为存放内容区的父节点
        tablePage: function(conDom) {
            $(this).children().click(function() {
                $(this).css("backgroundColor", "tomato").siblings().css("backgroundColor", "#fff")
                $(conDom).children().eq($(this).index()).show().siblings().hide()
            })
        },



        // 插件 将所有的按标签变红
        aToColorX: function(Options) {

            var defaults = {
                "color": "red",
                "fontSize": "16px"
            }
            var setting = $.extend({}, defaults, Options)
            this.css({
                "color": setting.color,
                "fontSize": setting.fontSize
            })
            this.each(function() {
                $(this).append("" + $(this).attr("href"));

            })
        }

    })

    $.extend({
        // 封装轮播图
        // Carousel: function(container) {
        //     function lbt() {
        //         var x = $(container).children().css("left")

        //         if (parseInt(x) >= -800) {
        //             $(container).children().animate({
        //                 "left": "-=400px"
        //             }, 500)
        //         } else {
        //             $(container).children().animate({
        //                 "left": "0px"
        //             }, 500)
        //         }
        //     }
        //     setInterval(lbt, 2000)
        // }

    })

})