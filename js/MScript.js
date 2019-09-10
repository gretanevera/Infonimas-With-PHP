//Script by Sayyed Salman
// https://stackoverflow.com/users/4833742/sayyed-salman
// Scroll to funkcija

$(document).ready(function () {
    $(".top").click(function () {
        var x = $("#grid").position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
});

$(document).ready(function () {
    $(".am").click(function () {
        var x = $(".apie").position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
});

$(document).ready(function () {
    $(".mok_ist").click(function () {
        var x = $(".mokist").position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
});

$(document).ready(function () {
    $(".volunt").click(function () {
        var x = $('.voluntr').position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
});

//Fade-in ir fade-out menu /sugedo transition/ veikia su z index
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $(".sidenav").css({"opacity": "1",}).css({"z-index" : "2"});
        } else {
            $(".sidenav").css({"opacity": "0", }).css({"z-index" : "-2"});
        }
    })
});





// // Paslėpti linkus kol op < 0.5>
// $(".sidenav").ready(function(){
//     if ($('.sidenav').css('opacity') === 0) {
//         $(".sidenav a").css({"pointer-events": "none"});
//     }else {
//         $(".sidenav a").css({"pointer-events": "visible"});
//     }
// });

// // // slepiam menu bandymas 1
// $('document').ready(function(){
//     if ($('.sidenav').css('opacity') == 0 ) {
//         $('.sidenav ').css({"z-index": "-2"});
//     }else {
//         $('.sidenav ').css({"z-index": "2"});
//         // e.preventDefault()
//     }
// });

// // // slepiam menu bandymas 1
// $('document').ready(function(){
//     while ($('.sidenav').css('opacity') === 1 ) {
//         $('.sidenav a').css({"z-index": "2"});
// }});
//

// //issiskleidimas Neviekia dar normaliai
// $('.am').hover(
//     function () {
//         $(this).animate({
//             width: '300px',
//         },100)
//         $('.txt').animate({
//             width: '300px',
//         },100)
//     },
//     //animacijos greitis
//     function () {
//         $(this).animate({
//             width: '20px',
//         },100)
//         $('.txt').animate({
//             width: '4px',
//         },100)
//
//     }
// );
// //Slepiam linkus Antras bandymas
// $(document).ready(function(){
//     if ($(".sidenav").css('opacity') === 1 ) {
//         $('.sidenav a').css({"visibility": "visible"});
//     }else {
//         $('.sidenav a').css({"visibility": "hidden"});
//         // e.preventDefault()
//     }
// });
