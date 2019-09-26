//click > get the name of divs class, change it to the named html

$(document).ready(function () {
    $(".inception>div").click(function () { /* only to chosen tags, this function will apply*/
        let file = this.className;
        //replace with html with modified divs name and make it a path
        file = file.replace('menu-', 'menu/') + ".html";
        //load the god damn thing
        $(".inception").load(file);
        console.log(file);
    })
});


$(document).ready (function(){
    $(".inception>div").click(function () {
        $(".eltexto").remove();
    })
    }
);

