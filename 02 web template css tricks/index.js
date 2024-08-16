alert('sig ok hvis du elsker hjorte')

let currentPage = 2;

let pages

function setup(){
    console.log("hej")

    select('#page'  +   currentPage).addClass('visible')

    pages = selectAll('.page')
    console.log(pages.length)
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
