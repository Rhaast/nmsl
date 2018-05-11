/*个人中心菜单*/
$(function(){
    $('.icon_1').mouseover(function () {
        $('.mylist').show()
    });
    $('.icon_1').mouseout(function () {
        $('.mylist').hide()
    });
});

$(function () {
    $('.footer .footerinfo .right .wx').mouseover(function () {
        $(this).find('.pop').fadeIn()
    })
    $('.footer .footerinfo .right .wx').mouseout(function () {
        $(this).find('.pop').hide()
    })
})