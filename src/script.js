function saveData(obj){
    var tittle = obj.childNodes[3].innerText
    var imgSrc = obj.childNodes[1].src
    srcs = imgSrc.split("/src")
    localStorage.setItem("tittle", tittle)
    localStorage.setItem("src", srcs[1])
}
function ProductPage(obj){
    saveData(obj)
    window.open("./src/product.html", "_self")
}
function ProductPage2(obj){
    saveData(obj)
    window.location = window.location
}