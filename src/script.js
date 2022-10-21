function ProductPage(obj){
    var tittle = obj.childNodes[3].innerText
    var imgSrc = obj.childNodes[1].src
    srcs = imgSrc.split("/src")
    localStorage.setItem("tittle", tittle)
    localStorage.setItem("src", srcs[1])
    
    window.open("./src/product.html", "_self")
}