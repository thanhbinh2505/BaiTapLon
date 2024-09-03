window.addEventListener('load', function(){
    let name_search=document.getElementById("search-friend")
        let clickk=this.document.querySelector(".clickk");
        let name_friend=this.document.querySelectorAll(".ten a");
        clickk.addEventListener("click", function(){
            if(name_search.value!==""){
                $(".right-bottom-friend").css("display","none")
                for(let aaaa of name_friend){
                    if(aaaa.innerText.toLowerCase().includes(name_search.value.toLowerCase())==true){
                        $(aaaa).closest(".right-bottom-friend").slideDown()
                    }
                }
            }
            else{
                $(".right-bottom-friend").css("display","block")
            }
        })


    // chọn người muốn inbox
    let click_name_user_messs=document.querySelectorAll(".right-bottom-friend")
    for(let click_name_user_mess of click_name_user_messs){
        click_name_user_mess.addEventListener("click",function(){
            let abc=$(click_name_user_mess).find(".ten a").text()
            $(".mid-top div .ten").text(abc)
            $(".mid-top div .ten").css("font-size", "1.5vw")
            $(".ib").fadeOut(1000)
            setTimeout(function() {
                $(".ib").remove()
            },1000);

        })
    }
    // inbox với jack
    let inbox=document.getElementById("inbox")
    let p=document.querySelector(".mid-bottom")
    inbox.onchange = function(){
        let defaul=document.getElementById('inbox')
        let inboxvalue=document.getElementById("inbox").value
        let h=`
        <div class="ib flex">
                    <div class="ib2">
                        <p>${inboxvalue}</p>
                    </div>
                    <div class="ib1">
                        <i class="fa fa-user-circle-o"></i>
                        <p>Xin chào</p>
                    </div>
                </div>  
        `
        p.innerHTML=p.innerHTML+h
        $(".ib2").fadeIn(1000)
        setTimeout(function() {
            $(".ib1").fadeIn(1000)
        },2000);
        document.getElementById("inbox").value=""
        $(".mid-bottom").animate({scrollTop: "+=300"},1000);
    };
    let liked =document.getElementById("liked")
    liked.onclick = function(){
        let hh=`
        <div class="ib flex">
                    <div class="ib2">
                        <li class="setting"><i class="	fas fa-thumbs-up"></i></li>
                    </div>
                    <div class="ib1">
                        <i class="fa fa-user-circle-o"></i>
                        <p>Cảm ơn</p>
                    </div>
                </div>  
        `
        p.innerHTML=p.innerHTML+hh
        $(".ib2").fadeIn(1000)
        setTimeout(function() {
            $(".ib1").fadeIn(1000)
        },2000);
        document.getElementById("inbox").value=""
        $(".mid-bottom").animate({scrollTop: "+=2000"},2000);
    };
    


})