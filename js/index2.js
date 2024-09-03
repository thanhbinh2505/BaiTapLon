window.addEventListener('load',function(){
    let bell=this.document.querySelector("li.bell i");
    let thongbao=this.document.querySelector(".ThongBao");
    bell.addEventListener("click",function(){
        thongbao.classList.toggle("show")
    })

})