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
//
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";}



