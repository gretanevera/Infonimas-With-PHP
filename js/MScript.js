$(document).ready(function () {
    $('.sidenav a, .gra2 a').click(function () { /* only to chosen tags, this function will apply*/
        let target = this.className; /*the link class we click. p.s. it will only show the name, without class or id indicators (. or #)*/
        target = '.' + target; /* adding class indicators*/
        let locale = target + '1'; /*variable that describes the div this  functions is going to scroll to: the div is name the same as target, just has number 1 at the end, so we add it manually*/
        // console.log(target, locale);
        //Script by Sayyed Salman
        // https://stackoverflow.com/users/4833742/sayyed-salman
        // Scroll to function
        $(document).ready(function () {
            $(target).ready(function () {
                var x = $(locale).position(); //gets the position of the div element...
                window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
                //it takes 2 parameters : (x axis cordinate, y axis cordinate);
            });
        });
    });
});


//Fade-in ir fade-out menu only works with z-index
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $(".sidenav").css({"opacity": "1",}).css({"z-index": "2"});
        } else {
            $(".sidenav").css({"opacity": "0",}).css({"z-index": "-2"});
        }
    })
});


// functional graveyard.... sorry mates, we doin efficiency now.

//
//
//   $(document).ready(function () {
//       $(".am").click(function () {
//           var x = $(".am1").position(); //gets the position of the div element...
//           window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//           //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//       });
//   });
// $(document).ready(function () {
//       $(".mok_ist").click(function () {
//           var x = $(".mok_ist1").position(); //gets the position of the div element...
//           window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//           //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//       });
//   });
//
//   $(document).ready(function () {
//       $('.volunt').click(function () {
//           var x = $('.volunt1').position(); //gets the position of the div element...
//           window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//           //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//       });
//   });
//   $(document).ready(function () {
//       $('.contk').click(function () {
//           var x = $('.contk1').position(); //gets the position of the div element...
//           window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//           //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//   });
//       });
//
//
//
//
//
//


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
