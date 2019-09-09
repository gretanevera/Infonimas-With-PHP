//Script by Sayyed Salman
// https://stackoverflow.com/users/4833742/sayyed-salman

$(document).ready(function () {
    $("#am").click(function () {
        var x = $("#apie").position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
});

// $(document).ready(function () {
//     $("#mok_ist").click(function () {
//         var x = $("#mokist").position(); //gets the position of the div element...
//         window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//         //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//     });
// });

//
