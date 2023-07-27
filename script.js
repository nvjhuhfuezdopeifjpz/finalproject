let product=document.getElementsByClassName("product")
let like=document.getElementsByClassName("like")
console.log(like)

for (let index = 0; index < like.length; index++) {
    
    like[index].addEventListener("click",function(){
        if(product[index].style.backgroundColor==="red"){
            product[index].style.backgroundColor="transparent"
        }
        else{
            product[index].style.backgroundColor="red"
        }
    })
    
}