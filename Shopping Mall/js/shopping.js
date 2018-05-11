/*个人中心菜单*/
$(function(){
    $('.icon_1').mouseover(function () {
        $('.mylist').show()
    });
    $('.icon_1').mouseout(function () {
        $('.mylist').hide()
    });
});
/*点赞*/
$(function () {
    $('.list-content .thumbup').click(function () {
        var index=$('.list-content .thumbup').index($(this));
        var praiseimg = $(".list-content .thumbup img").attr('src');
        if($(this).find('img').attr('src') == ("image/unthumbs.png")){
            $(this).html("<img src='image/thumbsed.png'/>");
        }else{
            $(this).html("<img src='image/unthumbs.png'/>");
        }


    })
})

/*收藏*/
$(function () {
    $('.list-content .shopinfo .info .icon .collect').click(function () {
        if($(this).attr('src') == "image/Collection-s.png"){
            $(this).attr("src","image/Collectioned-s.png");

        }else{
            $(this).attr("src","image/Collection-s.png");

        }


    })
})
/*心願單*/
$(function () {
    $('.list-content .shopinfo .info .icon .mywish').click(function () {
        if($(this).attr('src') == "image/mywish-s-uc.png"){
            $(this).attr("src","image/mywish-s-c.png");

        }else{
            $(this).attr("src","image/mywish-s-uc.png");

        }


    })
})
/*加入購物車*/
$(function () {
    $('.list-content .shopinfo .info .icon .cart').click(function () {
        $(this).parent('.icon').find('.sum').show();
        var num = $(this).parent('.icon').find('.sum').text()
        console.log(num)
        num++
        $(this).parent('.icon').find('.sum').text(num);
    })
})
/*侧边栏下拉*/
$(document).ready(function(){
    $(":range").rangeinput({progress: true});
    /* Slide Toogle */
    var display = $('.menu').eq(0).css('display');
    var thearrow = $('span.arrow').eq(0)
    if(display=='block'){
        thearrow.addClass("down")
        thearrow.removeClass("up")
    }
    $("ul.expmenu li > div.header").click(function()
    {    var arrowrd =  $(this).parent().find("ul.menu");
        var arrow = $(this).find("span.arrow");
        var otherarrow = $('span.arrow').not(arrow);

        if(arrowrd.css('display') == 'block'){
            arrowrd.slideUp()
            arrow.removeClass("down");
            arrow.addClass("up");
        }else{
            arrowrd.slideDown();
            $("ul.menu").not(arrowrd).slideUp()
            arrow.addClass("down");
            arrow.removeClass("up");
            otherarrow.removeClass("down");
            otherarrow.addClass("up");
        }
    });
});
// 分頁
$(function () {
    $("#page").paging({
        pageNo:5,
        totalPage: 9,
        totalSize: 300,
        callback: function(num) {
        }
    })
})


