window.addEventListener('load',function(){
    //Sự kiện click nút thông báo
    let bell=this.document.querySelector("li.bell i");
    let thongbao=this.document.querySelector(".ThongBao");
    bell.addEventListener("click",function(){
        $(thongbao).toggle(1000)
        // thongbao.classList.toggle("show")
    })

})