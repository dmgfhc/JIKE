$(function () {

    //更多产品高度自适应
    $("#more-product").height($(window).height());
    //更多产品鼠标滑动事件
    $("#moreProduct").mouseenter(function () {
        $("#more-product").css("display", "block");
    });
    //更多产品鼠标离开事件
    $("#moreProduct").mouseleave(function () {
        $("#more-product").css("display", "none");
    });
    //设置鼠标滑动事件
    $("#setting-menu").mouseenter(function () {
        $("#baidu-setting").css("display", "block");
    });
    //设置鼠标离开事件
    $("#setting-menu").mouseleave(function () {
        $("#baidu-setting").css("display", "none");
    });
    //用户菜单鼠标滑动事件
    $("#user-menu").mouseenter(function () {
        $("#user-setting").css("display", "block");
    });
    //用户菜单鼠标离开事件
    $("#user-menu").mouseleave(function () {
        $("#user-setting").css("display", "none");
    });

    //我的关注等标签切换效果
    var spans = $("#s_top span");
    var lis = $("#s_main li");
    spans.eq(0).attr("chosed", true).siblings().attr("chosed", false);
    //定义点击样式
    spans.click(function () {
        $(this).css({
            "backgroundColor": "#9a9da2",
            "color": "#fff",
            "fontWeight": "700"
        }).siblings().css({
            "backgroundColor": "#fff",
            "color": "#000",
            "fontWeight": "400"
        });
        //记录点击属性
        $(this).attr("chosed", "true").siblings().attr("chosed", "false");
        var index = $(this).index();
        lis.eq(index).css({"display": "block"}).siblings().css("display", "none");
        //定义不同点击显示下方内容框显示效果
        switch (index) {
            case 0:
                $("#s_wrap").height(500);
                break;
            case 1:
                $("#s_wrap").height(600);
                break;
            case 2:
                $("#s_wrap").height(600);
                break;
            case 3:
                $("#s_wrap").height(800);
                break;
            case 4:
                $("#s_wrap").height(700);
                break;
            default:
                $("#s_wrap").height(500);
                break;
        }
        //定义我的关注图标效果
        if (index != 0) {
            $("#focus_icons").css("backgroundPosition", "-15px 0");
        }
        else {
            $("#focus_icons").css("backgroundPosition", "-144px 0");
        }
    });

    //定义我的关注标签离开效果
    spans.mouseleave(function () {
        spans.each(function (index, element) {
            if ($(element).attr("chosed") == "false") {
                $(element).css({
                    "backgroundColor": "#fff",
                    "color": "#000"
                })
            }
        })
    });
    //定义我的关注标签滑动效果
    spans.mouseenter(function () {
        if ($(this).attr("chosed") == "false") {
            $(this).css({
                "backgroundColor": "#b3b6bb",
                "color": "#fff"
            })
        }
    });

    //天气效果滑动展示
    $(".s_weather_wrapper").mouseenter(function () {
        $(".weather-img").show();
    });
    //天气效果离开展示
    $(".s_weather_wrapper").mouseleave(function () {
        $(".weather-img").hide();
    });

    //背景关闭事件
    $(".s-skin-header .close").click(function () {
        $(".s-skin-layer").slideUp(1000);
    });

    //背景开启事件
    $(".s_icons #change-skin").click(function () {
        $(".s-skin-layer").slideDown(1000);
    });
    var backPhoto = $(".s-skin-header li");
    backPhoto.attr("chosed", 0);
    backPhoto.eq(0).attr("chosed", 1);
    //背景标签滑动效果
    backPhoto.mouseenter(function () {
        if ($(this).attr("chosed") == 0) {
            $(this).addClass("skin-chose");
        }
    });
    backPhoto.mouseleave(function () {
        if ($(this).attr("chosed") == 0) {
            $(this).removeClass("skin-chose");
        }
    });

    //换肤保存功能
    if (!localStorage.backIndex) {
        $(".preview-view-container").find("img").remove();
        // console.log(backIndex);
    } else {
        // console.log(backIndex);
        $(".preview-view-container").find("img").remove();
        var img_path = $(".tab-hot img").eq(localStorage.backIndex).attr("src");
        var img = $('<img src="' + img_path + '">');
        img.width(264);
        img.height(180);
        $(".preview-view-container").append($(img));
        var imgUrl = "url(" + img_path + ")";
        console.log(imgUrl);
        $(document.body).css("backgroundImage", imgUrl);
    }

    // 背景滑动效果
    $(".skin-img-shadow").mouseenter(function () {
        $(this).animate({opacity: 0.9}, 50);
        var index = $(this).index(".skin-img-shadow");
        $(".skin-img-item-writer").eq(index).animate({opacity: 1}, 50);
        var img_path = $(".tab-hot img").eq(index).attr("src");
        var img = $('<img src="' + img_path + '">');
        img.width(264);
        img.height(180);
        $(".preview-view-container").find("img").remove();
        $(".preview-view-container").append(img);

    });
    //背景离开效果
    $(".skin-img-shadow").mouseleave(function () {

        $(".skin-img-shadow").animate({opacity: 0}, 50);
        var index = $(this).index(".skin-img-shadow");
        $(".skin-img-item-writer").eq(index).animate({opacity: 0}, 50);
        if (!localStorage.backIndex) {
            $(".preview-view-container").find("img").remove();
            // console.log(backIndex);
        } else {
            // console.log(backIndex);
            $(".preview-view-container").find("img").remove();
            var img_path = $(".tab-hot img").eq(localStorage.backIndex).attr("src");
            var img = $('<img src="' + img_path + '">');
            img.width(264);
            img.height(180);
            $(".preview-view-container").append($(img));
        }

    });
    //背景点击效果
    $(".skin-img-shadow").click(function () {
        var index = $(this).index(".skin-img-shadow");
        localStorage.backIndex = index;
        var img_path = $(".tab-hot img").eq(index).attr("src");
        var img = $('<img src="' + img_path + '">');
        img.width(264);
        img.height(180);
        $(".preview-view-container").find("img").remove();
        $(".preview-view-container").append(img);
        var imgUrl = "url(" + img_path + ")";
        $(document.body).css("backgroundImage", imgUrl);
    });
    //取消背景点击效果
    $(".s-skin-header .reset").click(function () {
        $(document.body).css("backgroundImage", "");
        $(".preview-view-container").find("img").remove();
        localStorage.backIndex = "";
    });
    //取消背景滑动效果
    $(".s-skin-header .reset").mouseenter(function () {
        $(".s-skin-header .reset").css("color", "#0079f5");
        $(".skin-bg-icon").css("backgroundPosition", "-24px -192px")
    });
    //取消背景离开效果
    $(".s-skin-header .reset").mouseleave(function () {
        $(".s-skin-header .reset").css("color", "#666");
        $(".skin-bg-icon").css("backgroundPosition", "-24px -176px")
    });

    //瀑布流实现
    $(window).scroll(function () {
        // var img = $('<img src="./imgText/tuijian2.png" class="tipcontent1">');
        // if (spans.eq(1).attr("chosed") == "true" && scrollside()) {
        //     $("#s_main li").eq(1).append(img);
        //     var height = $("#s_wrap").height() + 480;
        //     $("#s_wrap").height(height);
        // }
        if (spans.eq(3).attr("chosed") == "true" && scrollside()) {
            var video1 = $(".video1").eq(0).clone();
            var video2 = $(".video2").eq(0).clone();
            $(".tipvideo").append(video1);
            $(".tipvideo").append(video2);
            var height = $("#s_wrap").height() + 600;
            $("#s_wrap").height(height);
        }
        if (spans.eq(4).attr("chosed") == "true" && scrollside()) {
            var purchase = $(".purchase3>img").eq(0).clone();
            $(".purchase3").append(purchase);
            var height = $("#s_wrap").height() + 350;
            $("#s_wrap").height(height);
        }
        if (scrollhot()) {
            var scrollUp = $(window).scrollTop() - $("#s_wrap").get(0).offsetTop;
            $(".tiptimehot").css("top", scrollUp)
        }
    });

    //回到顶部图标滑动效果
    $(".back-top").mouseenter(function () {
        $(".word-top").css("display", "block")
    });
    //回到顶部图标离开效果
    $(".back-top").mouseleave(function () {
        $(".word-top").css("display", "none")
    });
    //回到顶部图标点击效果
    $(".back-top").click(function () {

        var timer = null;

        timer = setInterval(function () {

            var backTop = $(window).scrollTop();

            var speed = backTop / 5;

            var moveTop = backTop - speed;

            $(window).scrollTop(moveTop);

            if (backTop == 0) {
                clearInterval(timer);
            }
        }, 50)
    });

    //回到顶部导航条定位
    var backPosition = $(window).width() - $(".s_wrap").offset().left - 895 - 100;

    $(".back-top").css("right", backPosition);

    //窗体大小改变事件
    $(window).resize(function () {

        backPosition = $(window).width() - $(".s_wrap").offset().left - 895 - 100;
        $(".back-top").css("right", backPosition);

    });

    //右侧滚动条滚动显示回到顶部效果
    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $(".back-top").css("display", "block");
        } else {
            $(".back-top").css("display", "none");
        }
    });


    //窗体滚动瀑布循环效果
    function scrollside() {
        var box = $("#s_wrap");
        var boxHeight = box.get(0).offsetTop + box.height() - 50;
        var windowHeight = $(window).height();
        var scrollHeight = $(window).scrollTop();
        return (boxHeight < windowHeight + scrollHeight);
    }

    //实时热点效果
    function scrollhot() {
        var hotTop = $("#s_wrap").get(0).offsetTop + $("#s_top").height();
        var scrollHeight = $(window).scrollTop();
        return (hotTop < scrollHeight);
    }
});




