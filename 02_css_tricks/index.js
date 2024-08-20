alert('sig ok hvis du elsker hjorte')

let currentPage = 3;
let pages
let colors = ['red',    'navy', 'green',    'pink']

function setup(){
    console.log("hej")

    select('#page'  +   currentPage).addClass('visible')

    pages = selectAll('.page')
    console.log(pages.length)

    //makes divs in page 3
    for(c of colors){
        console.log(c);
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
}

function shiftPage(num){
    console.log(num)
    if(isNaN(num)   ||    num    >  pages.length ||  num  ==   0){
        console.log("return")
        return
    }
    select("#page" + currentPage).removeClass("visible")
    currentPage = num
    select("#page" + currentPage).addClass("visible")
}

function keyPressed(){
    //console.log(key)
    if (key == "ArrowLeft"){
        if (currentPage >   1){
            shiftPage(currentPage - 1)
        }
    }
    if (key == "ArrowRight"){
        if (currentPage <   pages.length){
            shiftPage(currentPage   +   1)
        }
    }
    shiftPage(key)
}
