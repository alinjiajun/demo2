/**
 * Created by Administrator on 2017/4/11.
 */
$(function(){
    //搜索区
    (function () {
        var oUl = $('.s_nav');
        var aLi = oUl.find('li');
        var oText = $('#s_input_text');
        var oBtn = $('#s_input_btn');
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var iNow = 0;
        // console.log(arrText[0]);
        oText.val(arrText[0]);
        aLi.each(function(i,elem){
            $(this).click(function () {
                aLi.removeClass("active");
                $(this).addClass("active");
                //alert('a');
                iNow = i;
                oText.val(arrText[iNow])
            });

            oText.focus(function () {
                if ($(this).val()==arrText[iNow]){
                    $(this).val("");
                }
            });
            oText.blur(function () {
                if ($(this).val()==""){
                    $(this).val(arrText[iNow]);
                }
            });
        })
    })();
    //文章更新区
    (function () {
        var arrText=[{'name':'萱萱 ','time':'5','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'6','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'7','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'8','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'9','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'10','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'11','article':'那些灿烂华美的瞬间…'},
            {'name':'可可 ','time':'12','article':'那些灿烂华美的瞬间…'}]
        var oUl = $('#s_article');
        var oWap = $('.s_wap');
        var str = "";
        var iNow = 0;
        var timer = null;
        var btnUp = $('#article_up');
        var btnDown = $('#article_down');
        for (var i = 0; i<arrText.length;i++){
            str+='<li><strong class="name">'+arrText[i].name+'</strong><span class="time">'+arrText[i].time+'分钟前</span>写了篇文章：<span class="article">'+arrText[i].article+'</span></li>'
        }
        oUl.html(str);
        var aLi = oUl.find('li');
        var iH = aLi.innerHeight();
        btnUp.click(function () {
            handMove(-1);
        });
        btnDown.click(function () {
            handMove(1);
        });
        timer = setInterval(function () {
            autoMove(-1);
        },2000);
        oWap.hover(function(){
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                autoMove(-1);
            },2000);
        });
        function  handMove(j){
            iNow = iNow -j;
            if (iNow<0){
                iNow = 0;
            }else if (iNow>aLi.length-1){
                iNow = 0;
            }
            if (j>0){
                oUl.animate({'top':-iNow*iH*j},600);
            }else {
                oUl.animate({'top':iNow*iH*j},600);
            }
        }
        function autoMove(j){
            iNow = iNow -j;
            if (iNow<0){
                iNow = 0;
            }else if (iNow>5||iNow>aLi.length-1){
                iNow = 0;
            }
            oUl.animate({'top':iNow*iH*j},600);
        }

    })();
    //tab切换区
    (function () {
        fnTab($('.tab_nav1'), $('.tab_con1'),'click');
        fnTab($('.tab_nav2'),$('.tab_con2'),'click');
        fnTab($('.tab_nav3'),$('.tab_con3'),'mouseenter');
        fnTab($('.tab_nav4'),$('.tab_con4'),'mouseenter');
        fnTab($('.tab_nav5'),$('.tab_con5'),'mouseenter');
        fnTab($('.tab_nav6'),$('.tab_con6'),'mouseenter');
        function  fnTab(oNav,oCon,oEvent){
            var navLi = oNav.children();
            var conUl = oCon.find('ul');
            conUl.css({'display':'none'});
            conUl.eq(0).css({'display':'block'});
            //conUl.fadeOut('fast');
            //conUl.eq(0).fadeIn('fast');
            navLi.each(function (i,elem) {
                $(this).bind(oEvent,function () {
                    navLi.removeClass("active");
                    $(this).addClass("active");
                    navLi.find('a').attr('class',"triangle_down_grey");
                    $(this).find('a').attr('class',"triangle_down_red");
                    console.log();
                    conUl.css('display','none');
                    conUl.eq($(this).index()).css('display','block');
//                        conUl.fadeOut('fast');
//                        conUl.eq($(this).index()).fadeIn('fast');
                })
            })
        }
    })();
    //recommend轮播
    (function () {
        var oDiv = $('.recommend_pic');
        var oUl =oDiv.find('ul');
        var oOl =oDiv.find('ol');
        var aLiOl  = oOl.find('li');
        var aLiUl = oUl.find('li');
        var oP = oDiv.find('p');
        var iNow = 0;
        var bNow = 0;
        var Z = 2;
        var timer = null;
        var arrText = ['爸爸去哪了','清纯的美眉','泼辣的少妇'];
        aLiUl.css('display','none');
        aLiUl.eq(0).css('display','block');
        oP.html(arrText[0]);
        aLiOl.click(function () {
            iNow = $(this).index();
            tab(iNow);
        });
        oOl.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function(){
                iNow++;
                iNow %= aLiUl.length;
                tab(iNow);
            },2000);
        });
        timer = setInterval(function(){
            iNow++;
            iNow %= aLiUl.length;
            tab(iNow);
        },2000);
        function tab(iNow) {
            Z++;
            oP.html(arrText[iNow]);
            aLiOl.removeClass("active");
            aLiOl.eq(iNow).addClass("active");
            if(iNow!==bNow){
                aLiUl.eq(iNow).css({'display':'none','zIndex':Z}).slideDown('slow');
            }
            bNow = iNow;
        }
    })();
    //日历显示活动介绍
    (function () {
        var aLiTitle = $('.calendar_title').find('li');
        var oULCon = $('.calendar_con');
        var aLiCon = oULCon.find('li');
        var introDiv =  $('.n_a_intro');
        var oImg = $('.pic').find('img');
        var time = introDiv.find('.text em');
        var intro = introDiv.find('.text p');
        //console.log(aLiActivity.length);
        aLiCon.hover(function(){
            var index = $(this).index()%aLiTitle.length;
            var iTop = $(this).position().top - 30;
            var iLeft = $(this).position().left + 50;
            //console.log(iTop);
            if ($(this).attr('class') =="next_activity"){
                oImg.attr('src',$(this).find('img').attr('src'));
                intro.text($(this).find('img').attr('info'));
                introDiv.css({'display':'block','top':iTop,'left':iLeft});
                time.html(aLiTitle.eq(index).text());
            }
        }, function () {
            introDiv.css({'display':'none'});
        })
    })();
    //BBS 列表项鼠标移入变大
    (function () {
        var aLi = $('.bbs').find('ol li');
        aLi.mouseenter(function(){
            aLi.removeClass("active");
            $(this).addClass('active');
        })
    })();
    //红人烧客头像移入显示信息
    (function () {
        var oUl = $('.hot_p');
        var aLi = oUl.find('li');
        var intro = oUl.find('.intro');
        aLi.mouseenter(function(){
            console.log("a");
            var oImg = $(this).find('img');
            var iW = $(this).css('width');
            var iH = $(this).css('height');
            var iTop = $(this).position().top;
            var iLeft = $(this).position().left;
            intro.css({'width':iW,'height':iH,'left':iLeft,'top':iTop,'display':'block'});
            intro.find('em').html(oImg.attr('name'));
            intro.find('strong').html(oImg.attr('area'));
            intro.find('span').html(oImg.attr('fans'));
        });
        oUl.mouseleave(function(){
            intro.slideUp();
        });
    })();
});