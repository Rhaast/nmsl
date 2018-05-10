    $(function(){
        $('.Navigationbar ul li a').click(function(){
            $(this).addClass('active');
            $('.Navigationbar li a').not(this).removeClass('active');
        });
        $('.icon_1').mouseover(function () {
            $('.mylist').show()
        });
        $('.icon_1').mouseout(function () {
            $('.mylist').hide()
        });
    });
    $('#mpanel4').slideVerify({
        type : 2,		//类型
        vOffset : 5,	//误差量，根据需求自行调整
        vSpace : 5,	//间隔
        imgName : ['1.jpg', '2.jpg'],
        imgSize : {
            width: '256px',
            height: '122px',
        },
        blockSize : {
            width: '40px',
            height: '40px',
        },
        barSize : {
            width : '256px',
            height : '27px',
        },
        ready : function() {
        },
        success : function() {
            alert('验证成功，添加你自己的代码！');
            //......后续操作
        },
        error : function() {
            alert('验证失败！');
        }

    });
    // 点击获取验证码
    var InterValObj; //timer变量，控制时间
    var count = 30; //间隔函数，1秒执行
    var curCount;//当前剩余秒数
    var code = ""; //验证码
    var codeLength = 6;//验证码长度
    function sendMessage() {
        curCount = count;
        var dealType; //验证方式
        var uid=$("#uid").val();//用户uid
        if ($("#phone").attr("checked") == true) {
            dealType = "phone";
        }
        else {
            dealType = "email";
        }
//产生验证码
        for (var i = 0; i < codeLength; i++) {
            code += parseInt(Math.random() * 9).toString();
        }
//设置button效果，开始计时
        $("#btnSendCode").attr("disabled", "true");
        $("#btnSendCode").val( + curCount + "秒再获取");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
//向后台发送处理数据
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "text", //数据格式:JSON
            url: 'Login.ashx', //目标地址
            data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
            error: function (XMLHttpRequest, textStatus, errorThrown) { },
            success: function (msg){ }
        });
    }
    //timer处理函数
    function SetRemainTime() {
        if (curCount == 0) {
            window.clearInterval(InterValObj);//停止计时器
            $("#btnSendCode").removeAttr("disabled");//启用按钮
            $("#btnSendCode").val("重新发送验证码");
            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
        }
        else {
            curCount--;
            $("#btnSendCode").val( + curCount + "秒再获取");
        }
    }
    $(function(){
        $('select.select').select();
    });
    $(function(){
        $('#register').click(function(){
            $('.register-wrapper').show();
            $('.login-wrapper').hide();
        });
        $('.jumplogin').click(function () {
            $('.login-wrapper').show();
            $('.register-wrapper').hide();
        })
    });