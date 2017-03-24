$(document).ready(
    function() {
        pagebytes = $('html').html().length;
        kbytes = pagebytes / 1024;
        console.log(kbytes)
    }
);

document.onreadystatechange = function() {

    if (document.readyState === 'complete') {
        $('.mainContainer').css('display', 'block');
        $('#loader').css('display', 'none');
    } else {
        $('#loader').css('display', 'block');
        $('.mainContainer').css('display', 'none');
    }
}








var currency = document.querySelector('ul.exc-countries');
var buy = document.querySelector('ul.exc-buy');
var sell = document.querySelector('ul.exc-sell');
var overlay = document.querySelector('.overlay');
var over = 0;
currency.style.top = 0;
buy.style.top = 0;
sell.style.top = 0;
var i = 0;

var t = setInterval(function() {
    change(currency)
}, 2000)

var t = setInterval(function() {
    change(buy)
}, 2000)

var t = setInterval(function() {
    change(sell)
}, 2000)

function change(c) {
    c.style.top = parseInt(c.style.top) - 17 + 'px';
    if (parseInt(c.style.top) < -34) {
        c.style.top = 0 + 'px';
    }
}


///////////////////////////////////////slide-left function/////////////////////////////////////////////////

function slideLeft(param) {
    param.style.left = window.innerWidth + 'px';
    var velocity = parseInt(param.style.left);
    intervalSide = setInterval(function() {
        var rt = parseInt(param.style.left) + parseInt(param.style.width);
        console.log(rt);
        param.style.display = 'block';
        velocity -= 4;
        param.style.left = velocity + 'px';
        if (parseInt(window.innerWidth) >= rt) {
            document.body.padding = '40px';
            param.style.left = velocity + 7 + 'px';
            if (over == 'bank') {
                overlay2.style.display = 'block';
            } else {
                overlay.style.display = 'block';
            }
            clearInterval(intervalSide);
        }
    }, 1);
}


function slideHide(param) {
    param.style.left = window.innerWidth + 'px';
    var velocity = parseInt(param.style.left);
    intervalSide = setInterval(function() {
        console.log(param.style.left);
        var rt = parseInt(param.style.left) + parseInt(param.style.width);
        console.log(param.clientWidth);
        param.style.display = 'block';
        velocity += 4;
        param.style.left = velocity + 'px';
        if (parseInt(window.innerWidth) < rt) {
            document.body.padding = '0px';
            param.style.left = velocity + 7 + 'px';
            if (over == 'bank') {
                overlay2.style.display = 'none';
                alert('oldu')
            } else {
                overlay.style.display = 'none';
            }
            clearInterval(intervalSide);
        }
    }, 1);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////-----Search input eventlistener----------/////////////////////////////

var inp = document.querySelector('.searchCont input');
var misc = document.querySelector('.miscCont');
inp.addEventListener('focus', function() {
    misc.style.opacity = 1;
    misc.style.display = 'flex';
})

var txt = document.querySelector('.searchCont span');
var misc = document.querySelector('.miscCont');
var miscUl = document.querySelector('.miscCont ul');
var inp = document.querySelector('.inputCont input');
var qwe = '';
inp.addEventListener('click', function() {
    txt.style.top = -40 + 'px';
    txt.style.left = '-110px';
    txt.style.transform = 'scale(.5, .5)';
    miscUl.style.display = 'flex';
    miscUl.style.opacity = 1;
    inp.value = qwe;
});
window.addEventListener('click', function() {
    if (document.activeElement != inp) {
        txt.style.top = '5px';
        txt.style.left = '5px';
        txt.style.transform = 'scale(1,1)';
        misc.style.display = 'none';
        miscUl.style.opacity = 0;
        misc.style.opacity = 0;
        misc.style.display = 'none';
        qwe = inp.value;
        inp.value = '';
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////SLIDER///////////////////////////////////////////////////////////////////////




var imgArr = ['img/slider1.jpg', 'img/slider2.jpg', 'img/slider3.jpg'];
var slider = document.querySelector('.sliderCont');
var buttons = document.querySelectorAll('.sliderButtons li');
k = 0;
for (i = 0; i < imgArr.length; i++) {
    buttons[i].addEventListener('click', function() {
        chg(this);
    });
}

a = setInterval(function() {
    chg(buttons[k]);
}, 2000);


function chg(arg) {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>'
    }
    if (k == 2) {
        k = 0;
        document.querySelector('.sliderText').style.display = 'none'
        val = arg.getAttribute('value');
        slider.style.backgroundImage = 'url(' + imgArr[val] + ')';
        arg.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
        if (val == 2) {
            document.querySelector('.sliderText').style.display = 'block'
        }
    } else {
        k++;
        document.querySelector('.sliderText').style.display = 'none'
        val = arg.getAttribute('value');
        slider.style.backgroundImage = 'url(' + imgArr[val] + ')';
        arg.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
        if (val == 2) {
            document.querySelector('.sliderText').style.display = 'block'
        }
    }
}

/////////////////////////////////////////////////////SLIDER-right content hover//////////////////////////////////////////////////

var odeniw = document.querySelector('.odenisCont');
odeniw.addEventListener('mouseover', function() {
    odeniw.style.transform = 'scale(1.05)';
});
odeniw.addEventListener('mouseout', function() {
    odeniw.style.transform = 'scale(1)';
});


/////////////////////////////////////////////////////Contact us slider div///////////////////////////////////////////////////////////////////

var Side = document.querySelector('.contactUs');
var contUs = document.querySelector('.headerBanking li');
var eks = document.querySelector('.closeIcon');

contUs.addEventListener('click', function() {
    over = 'cont';
    slideLeft(Side);
});
eks.addEventListener('click', function() {
    slideHide(Side);
});
overlay.addEventListener('click', function() {
    slideHide(Side);
});



/////////////////////////////////////////////////////Bank online slider div///////////////////////////////////////////////////////////////////

var bo = document.querySelector('.bankOnline');
var online = document.querySelectorAll('.headerBanking li')[1];
var xBank = document.querySelector('.closeIconBank');
var overlay2 = document.querySelector('.overlayBank');
online.addEventListener('click', function() {
    over = 'bank';
    slideLeft(bo);
});
xBank.addEventListener('click', function() {

    slideHide(bo);
});
overlay2.addEventListener('click', function() {
    slideHide(bo);
});
