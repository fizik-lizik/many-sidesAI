const paragraphs = document.querySelectorAll(".paragraph")
paragraphs.forEach((item, index)=>{
    x = "_"+(index+1)
    // item.classList.remove(x)
    item.classList.add(x)
})

setInterval(() => {
    
    
setTimeout(function(){
    console.log("1")
    paragraphs.forEach((item, index)=>{
        x = "_"+(index+1)
        item.classList.remove(x)
        // item.classList.add(x)
    })
}, 0)
setTimeout(() => {
    console.log("2")
    paragraphs.forEach((item, index)=>{
        x = "_"+(index+1)
        // item.classList.remove(x)
        item.classList.add(x)
    })
}, 1000);
}, 9000);