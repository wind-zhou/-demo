$(function(){
    $.fn.extend({
        navbar:function(){//侧导航
            return this.each(function(){//返回调用该方法的对象的集合
                $(this).on("click","h3",function(){
                    $(this).next().slideDown().siblings("ul").slideUp();
                })
            })            
        },
        submenu:function(){//二级导航
            return this.each(function(){
                $(this).children("li").hover(function(){
                    $(this).children("ul").slideDown(500);
                },function(){
                    $(this).children("ul").slideUp(500);
                })
            })
        },
        carousel:function(){ //轮播图
            return this.each(function(){
                function carou(){
                    $("#show").scrollLeft($("#show").scrollLeft()+20);
                    if($("#show").scrollLeft()>=400){
                        $("#show").children("div").children().first().appendTo($("#show").children("div"));
                        $("#show").scrollLeft(0);
                        clearInterval(i);
                        start();
                    }
                }
                function start(){
                    setTimeout(function(){
                        i=setInterval(carou,100)
                    },1000);
                }
                start();
            })
        },
        tab:function(){//标签页
            return this.each(function(){
                $(this).children().first().children().mouseenter(function(){
                    $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
                })
            })
        },
        scaling:function(){//中心缩放
            return this.each(function(){
                $(this).on("click","button",function(){
                    if($(this).next().css("width")=="400px"){
                        $(this).next().animate({"width":"100px","height":"100px","left":"200px","top":"200px"});
                    }else{
                        $(this).next().animate({"width":"400px","height":"400px","left":"50px","top":"50px"});
                    }        
                })
            })
        }
    })
})