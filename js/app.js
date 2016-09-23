$(document).foundation();


$(window).load(function() {
    
    $('.page-loader').fadeOut('400');

    // gallery slider 
        $('.vid-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            asNavFor: '.vid-slider'
        });

        $('.vid-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.vid-wrap',
            // dots: true,
            centerMode: true,
            focusOnSelect: true,
            arrows: false
        });
    // gallery slider 

    // blog slider 
        $('.blog-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            arrows: false,


            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        });
    // blog slider 

    // Fixed Header 
        $(window).on('scroll', function(){
            var $this = $(this),
                theScroll = $this.scrollTop();


            if (theScroll >= 200) {
                $('.page-header').addClass('small-header');
                $('#banner').css({
                    'background': '-webkit-linear-gradient(#0091ea, #ea6b20)',
                    'background': '-o-linear-gradient(#0091ea, #ea6b20)',
                    'background': '-mox-linear-gradient(#0091ea, #ea6b20)',
                    'background': 'linear-gradient(#0091ea, #ea6b20)'
                });
            } if (theScroll > 600){
                $('.page-header').addClass('show-it');
                $('#banner').css('background', '#0091ea');         

            }else {
                $('.page-header').removeClass('small-header');           
                $('.page-header').removeClass('show-it');
                $('#banner').css('background', '#0091ea');         
            }

            $('.sun').css('top', theScroll/2+'px');
            // $('#banner').css({
            //     'background': '-webkit-linear-gradient(#0091ea, #ea6b20)',
            //     'background': '-o-linear-gradient(#0091ea, #ea6b20)',
            //     'background': '-mox-linear-gradient(#0091ea, #ea6b20)',
            //     'background': 'linear-gradient(#0091ea, #ea6b20)'
            // });
        });
    // Fixed Header 

    // footer Form
        $('.once').one('click', function(e) {
            e.preventDefault();
            $('.footer-form').height('150px');
            $('.once').removeClass('.once');
        });
    // footer Form

    // WOW
        wow = new WOW();
        wow.init();
    // WOW

    var mX,
        rotateValue,
        totalWidth = $(window).width();
        console.log(totalWidth);


    $( document ).on( "mousemove", function( event ) {
        mX = event.pageX;

        if(mX >= totalWidth/2){
            var xyz = mX - totalWidth/2; 
            rotateValue = xyz / 30;
            rotateValue2 = xyz / 20;
            rotateValue3 = xyz / 10;
            $('.clouds img').css('transform', 'translate('+rotateValue+'px)');
            $('.clouds2 img').css('transform', 'translate('+rotateValue2+'px)');
            $('.clouds3 img').css('transform', 'translate('+rotateValue3+'px)');
        } else {
            var xyz = totalWidth/2 - mX; 
            rotateValue = xyz / 30;
            rotateValue2 = xyz / 20;
            rotateValue3 = xyz / 10;
            $('.clouds img').css('transform', 'translate(-'+rotateValue+'px)');      
            $('.clouds2 img').css('transform', 'translate(-'+rotateValue2+'px)');      
            $('.clouds3 img').css('transform', 'translate(-'+rotateValue3+'px)');      
        }
    });



    // var tl = new TimelineLite();
   
    // tl.from('.cloud-one',1,{left:-500,width:"15%",onComplete:play},"first")
    // .to('.cloud-one',1,{left:1366,width:"15%",onComplete:play},"first+=1")
    
    // .from('.cloud-two',1,{left:-200,width:"15%",onComplete:play},"first+=.5")
    // .to('.cloud-two',1,{left:1366,width:"15%",onComplete:play},"first+=.75")
   
    // .from('.cloud-hree',1,{left:-300,width:"15%",onComplete:play},"first+=.75")
    // .to('.cloud-three',1,{left:1366,width:"15%",onComplete:play},"first+=1.75")

    // .from('.cloud-four',1,{left:-300,width:"15%",onComplete:play},"first+=.75")
    // .to('.cloud-four',1,{left:1366,width:"15%",onComplete:play},"first+=1.75")

    // .from('.cloud-five',1,{left:-300,width:"15%",onComplete:play},"first+=.75")
    // .to('.cloud-five',1,{left:1366,width:"15%",onComplete:play},"first+=1.75")

    // .from('.cloud-six',1,{left:-300,width:"15%",onComplete:play},"first+=.75")
    // .to('.cloud-six',1,{left:1366,width:"15%",onComplete:play},"first+=1.75")
    // ;

    
    // function play()
    // {
    //     tl.play();
    // }
    

});



    
$(document).ready(function() {



});
