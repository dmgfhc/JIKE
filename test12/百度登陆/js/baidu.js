$(function() {

    //更多产品
    var moreProduct = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$more = $("#moreProduct");
        },
        bind: function() {
            //更多产品高度自适应
            //this.$more.height($(window).height());
            //更多产品鼠标滑动事件
            this.$more.hover(function() {
                $("#more-product").css("display", "block");
            }, function() {
                $("#more-product").css("display", "none");
            });
        }
    }

    //百度设置事件
    var settingMenu = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$settingMenu = $("#setting-menu");
        },
        bind: function() {
            //更多产品鼠标滑动事件
            this.$settingMenu.hover(function() {
                $("#baidu-setting").css("display", "block");
            }, function() {
                $("#baidu-setting").css("display", "none");
            });
        }
    }

    //用户菜单
    var userMenu = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$userMenu = $("#user-menu");
        },
        bind: function() {
            this.$userMenu.hover(function() {
                $("#user-setting").css("display", "block");
            }, function() {
                $("#user-setting").css("display", "none");
            });
        }
    }

    //我的关注
    var myFocus = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.sTop = $("#s_top span");
            this.sMain = $("#s_main li");
        },
        bind: function() {
            var that = this;
            this.sTop.click(
                    function() {
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
                        that.sMain.eq(index).css({ "display": "block" }).siblings().css("display", "none");
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
                        } else {
                            $("#focus_icons").css("backgroundPosition", "-144px 0");
                        }
                    }
                ),
                this.sTop.hover(function() {
                    if ($(this).attr("chosed") == "false") {
                        $(this).css({
                            "backgroundColor": "#b3b6bb",
                            "color": "#fff"
                        })
                    }
                }, function() {
                    that.sTop.each(function(index, element) {
                        if ($(element).attr("chosed") == "false") {
                            $(element).css({
                                "backgroundColor": "#fff",
                                "color": "#000"
                            })
                        }
                    })
                })
        }
    }

    //天气效果
    var weather = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$weather = $(".s_weather_wrapper");
        },
        bind: function() {
            this.$weather.hover(function() {
                $(".weather-img").show();
            }, function() {
                $(".weather-img").hide();
            });
        }
    }

    //背景效果
    var backGround = {
        init: function() {
            this.render();
            this.bind();
            this.skin();
        },
        render: function() {
            this.$close = $(".s-skin-header .close"); //关闭
            this.$open = $(".s_icons #change-skin"); //打开
            this.backList = $(".s-skin-layer"); //背景列表
            this.backPhoto = $(".s-skin-header li"); //背景图片
            this.backpreview = $(".preview-view-container"); //背景预览
            this.backShow = $(".skin-img-shadow"); //背景滑动效果
            this.backCancel = $(".s-skin-header .reset"); //取消背景现实效果
            this.cancelIcon = $(".skin-bg-icon"); //取消背景图标效果
        },
        //皮肤效果
        skin: function() {
            //换肤保存功能
            if (!localStorage.backIndex) {
                this.backpreview.find("img").remove();
            } else {
                this.backpreview.find("img").remove();
                var img_path = $(".tab-hot img").eq(localStorage.backIndex).attr("src");
                var img = $('<img src="' + img_path + '">');
                img.width(264);
                img.height(180);
                this.backpreview.append($(img));
                var imgUrl = "url(" + img_path + ")";
                $(document.body).css("backgroundImage", imgUrl);
            }
        },
        bind: function() {
            var that = this;
            this.$close.click(function() {
                that.backList.slideUp(1000); //背景关闭
            });
            this.$open.click(function() {
                that.backList.slideDown(1000); //背景开启
            });
            this.backPhoto.attr("chosed", 0);
            this.backPhoto.eq(0).attr("chosed", 1);
            //背景标签滑动效果
            this.backPhoto.hover(function() {
                if ($(this).attr("chosed") == 0) {
                    $(this).addClass("skin-chose");
                }
            }, function() {
                if ($(this).attr("chosed") == 0) {
                    $(this).removeClass("skin-chose");
                }
            });
            // 背景滑动效果
            this.backShow.mouseenter(function() {
                $(this).animate({ opacity: 0.9 }, 50);
                var index = $(this).index(".skin-img-shadow");
                $(".skin-img-item-writer").eq(index).animate({ opacity: 1 }, 50);
                var img_path = $(".tab-hot img").eq(index).attr("src");
                var img = $('<img src="' + img_path + '">');
                img.width(264);
                img.height(180);
                that.backpreview.find("img").remove();
                that.backpreview.append(img);

            });
            //背景离开效果
            this.backShow.mouseleave(function() {
                that.backShow.animate({ opacity: 0 }, 50);
                var index = $(this).index(".skin-img-shadow");
                $(".skin-img-item-writer").eq(index).animate({ opacity: 0 }, 50);
                if (!localStorage.backIndex) {
                    that.backpreview.find("img").remove();
                } else {
                    that.backpreview.find("img").remove();
                    var img_path = $(".tab-hot img").eq(localStorage.backIndex).attr("src");
                    var img = $('<img src="' + img_path + '">');
                    img.width(264);
                    img.height(180);
                    that.backpreview.append($(img));
                }
            });
            //背景点击效果
            this.backShow.click(function() {
                var index = $(this).index(".skin-img-shadow");
                localStorage.backIndex = index;
                var img_path = $(".tab-hot img").eq(index).attr("src");
                var img = $('<img src="' + img_path + '">');
                img.width(264);
                img.height(180);
                that.backpreview.find("img").remove();
                that.backpreview.append(img);
                var imgUrl = "url(" + img_path + ")";
                $(document.body).css("backgroundImage", imgUrl);
            });
            //取消背景点击效果
            this.backCancel.click(function() {
                $(document.body).css("backgroundImage", "");
                that.backpreview.find("img").remove();
                localStorage.backIndex = "";
            });
            //取消背景滑动效果
            this.backCancel.mouseenter(function() {
                that.backCancel.css("color", "#0079f5");
                that.cancelIcon.css("backgroundPosition", "-24px -192px")
            });
            //取消背景离开效果
            this.backCancel.mouseleave(function() {
                that.backCancel.css("color", "#666");
                that.cancelIcon.css("backgroundPosition", "-24px -176px")
            });
        }
    }

    //瀑布流
    var waterFall = {
        init: function() {
            this.render();
            this.scroll();
        },
        render: function() {
            this.spans = $("#s_top span");
            this.viedo1 = $(".video1");
            this.video2 = $(".video2");
            this.tipvideo = $(".tipvideo");
            this.wrap = $("#s_wrap");
            this.purchase = $(".purchase3>img");
            this.purchase3 = $(".purchase3");
            this.tiptimehot = $(".tiptimehot");
            this.$window = $(window);
            this.top = $("#s_top");
        },
        //窗体滚动瀑布循环效果
        scrollside: function() {
            var box = this.wrap;
            var boxHeight = box.get(0).offsetTop + box.height() - 50;
            var windowHeight = this.$window.height();
            var scrollHeight = this.$window.scrollTop();
            return (boxHeight < windowHeight + scrollHeight);
        },
        //实时热点效果
        scrollhot: function() {
            var hotTop = this.wrap.get(0).offsetTop + this.top.height();
            var scrollHeight = this.$window.scrollTop();
            return (hotTop < scrollHeight);
        },
        scroll: function() {
            var that = this;
            $(window).scroll(function() {
                if (that.spans.eq(3).attr("chosed") == "true" && that.scrollside()) {
                    var video1 = that.viedo1.eq(0).clone();
                    var video2 = that.video2.eq(0).clone();
                    that.tipvideo.append(video1);
                    that.tipvideo.append(video2);
                    var height = that.wrap.height() + 600;
                    that.wrap.height(height);
                }
                if (that.spans.eq(4).attr("chosed") == "true" && that.scrollside()) {
                    var purchase = that.purchase.eq(0).clone();
                    that.purchase3.append(purchase);
                    var height = that.wrap.height() + 350;
                    that.wrap.height(height);
                }
                if (that.scrollhot()) {
                    var scrollUp = $(window).scrollTop() - that.purchase.get(0).offsetTop;
                    that.tiptimehot.css("top", scrollUp)
                }
            });
        }
    }

    //回到顶部
    var backTop = {
        init: function() {
            this.render();
            this.bind();
            this.position();
        },
        render: function() {
            this.backTop = $(".back-top");
            this.wordTop = $(".word-top");
            this.$window = $(window);
        },
        position: function() {
            var backPosition = $(window).width() - $(".s_wrap").offset().left - 895 - 100;
            this.backTop.css("right", backPosition);
        },
        bind: function() {
            var that = this;
            this.backTop.hover(function() {
                that.wordTop.css("display", "block")
            }, function() {
                that.wordTop.css("display", "none")
            });
            this.backTop.click(function() {

                var timer = null;

                timer = setInterval(function() {

                    var backTop = $(window).scrollTop();

                    var speed = backTop / 5;

                    var moveTop = backTop - speed;

                    $(window).scrollTop(moveTop);

                    if (backTop == 0) {
                        clearInterval(timer);
                    }
                }, 50)
            });
            //右侧滚动条滚动显示回到顶部效果
            this.$window.scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $(".back-top").css("display", "block");
                } else {
                    $(".back-top").css("display", "none");
                }
            });
            //窗体大小改变事件
            this.$window.resize(function() {
                backPosition = $(window).width() - $(".s_wrap").offset().left - 895 - 100;
                $(".back-top").css("right", backPosition);

            });
        }
    }

    backGround.init(); //背景功能
    waterFall.init(); //瀑布流效果
    backTop.init(); //回到顶部
    weather.init(); //天气效果
    myFocus.init(); //我的关注效果
    userMenu.init(); //用户菜单
    settingMenu.init(); //百度设置
    moreProduct.init(); //更多产品
});
