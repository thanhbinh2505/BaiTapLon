window.addEventListener('load',function(){
    //Sự kiện click nút thông báo
    let bell=this.document.querySelector("li.bell i");
    let thongbao=this.document.querySelector(".ThongBao");
    bell.addEventListener("click",function(){
        $(thongbao).toggle(1000)
        // thongbao.classList.toggle("show")
    })
    // tìm video
    let name_searchh=document.getElementById("search-video")
    let clickkk=this.document.querySelector(".clickkk");
    let name_video=this.document.querySelectorAll(".namevideo");
    let cap_video=document.querySelectorAll(".capvideo")
        clickkk.addEventListener("click", function(){
            $(".mid-articles").css("display","none")
            if(name_searchh.value!==""){
                for( let namevideo of name_video){
                    if(namevideo.innerText.toLowerCase().includes(name_searchh.value.toLowerCase())==true){
                        $(namevideo).closest(".mid-articles").slideDown()
                    }
                }
            }
            else{
                $(".mid-articles").css("display","block")
            }
            if(name_searchh.value!==""){
                for( let capvideo of cap_video){
                    if(capvideo.innerText.toLowerCase().includes(name_searchh.value.toLowerCase())==true){
                        $(capvideo).closest(".mid-articles").slideDown()
                    }
                }
            }
            else{
                $(".mid-articles").css("display","block")
            }
        })
        let name_searchh1=document.getElementById("search-video1")
        let clickkk1=this.document.querySelector(".clickkk1");
            clickkk1.addEventListener("click", function(){
                $(".mid-articles").css("display","none")
                if(name_searchh1.value!==""){
                    for( let namevideo of name_video){
                        if(namevideo.innerText.toLowerCase().includes(name_searchh1.value.toLowerCase())==true){
                            $(namevideo).closest(".mid-articles").slideDown()
                        }
                    }
                }
                else{
                    $(".mid-articles").css("display","block")
                }
                if(name_searchh1.value!==""){
                    for( let capvideo of cap_video){
                        if(capvideo.innerText.toLowerCase().includes(name_searchh1.value.toLowerCase())==true){
                            $(capvideo).closest(".mid-articles").slideDown()
                        }
                    }
                }
                else{
                    $(".mid-articles").css("display","block")
                }
            })
    

        
})