//click > get the name of divs class, change it to the named html

$(document).ready(function () {
    $("main div").click(function () { /* only to chosen tags, this function will apply*/
        let file = this.className;
        //replace with html with modified divs name
        file = file.replace('menu-', 'menu/') + ".html";
        $("main").load(file);
        // console.log(file);
    })
});


