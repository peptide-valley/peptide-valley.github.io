$(function () {

    scroll(10000);
    function scroll(item) {
        var count = 0;
        var stop = false;
        //获取图片
        var $img = $('#index-banner .init .banner-img').find('li');
        //获取数字
        var $num = $('#index-banner .banner-d').find('li');
        //给每个数字设的事件
        $num.eq(count).addClass('d-bg').stop(true, true).siblings().removeClass("d-bg");
        $num.hover(function () {
            stop = true;
            count = $num.index($(this));
            $img.eq(count).stop(true, true).fadeIn().siblings().fadeOut();
            $(this).addClass("d-bg").stop(true, true).siblings().removeClass("d-bg")
        }, function () {
            stop = false;
        });
        $img.hover(function () {
            stop = true;
        }, function () {
            stop = false;
        });
        //图片轮播
        setInterval(function () {
            if (stop) return;
            count++;
            if (count >= $img.length) {
                count = 0;
            }
            $img.eq(count).stop(true, true).fadeIn().siblings().fadeOut();
            $num.eq(count).addClass("d-bg").stop(true, true).siblings().removeClass("d-bg")
        }, item);
    }
    function sidebarScroll(height){
        var $domHeight = $(document).height();
        var $winHeight = $(window).height();
        $(window).scroll(function(){
            var $scrollTop = $(document).scrollTop();
            if($scrollTop > height && $scrollTop < $domHeight-810){
                if(height>187){
                    $('.sidebar').removeClass('sidebar-bottom').css({'top':($scrollTop-187+58)+'px'}).find('>ul').hide();
                }else {
                    $('.sidebar').removeClass('sidebar-bottom').css({'top':($scrollTop-height+58)+'px'}).find('>ul').hide();
                }
            } if($scrollTop > height && $scrollTop > $domHeight-810 && $scrollTop != $domHeight-$winHeight){
                $('.sidebar').addClass('sidebar-bottom')
            }else if($scrollTop == $domHeight-$winHeight){
                $('.sidebar').addClass('sidebar-bottom')
            }else if($scrollTop < height){
                $('.sidebar').removeClass('sidebar-bottom').css({'top':'58px'}).find('>ul').show();
            }

        });
    }
    function sidebarClick() {
        var $li = $('#sidebar>li');
        $li.click(function() {
            $(this).addClass("bg").siblings().removeClass('bg').find('ul').slideUp().find('li').removeClass('bg');
            

        });
    }
    window.sidebarScroll=sidebarScroll;
    window.sidebarClick=sidebarClick;
});
