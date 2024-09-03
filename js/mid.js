window.addEventListener('load', function(){
    //Sự kiện click nút xóa
    let p=document.querySelector(".mid-article");
    let closes=document.querySelectorAll("a.delete");
    function deleteProduct(product){
        //Xóa một bài viết
        let p=document.querySelector(".mid-articles");
        if(confirm("Bạn muốn xóa bài viết này!")===true){
            p.removeChild(product);
        }
    }
    $(".mid-articles").on("click",".delete",function(){
        deleteProduct(this.parentElement.parentElement.parentElement.parentElement)
    })
//Lấy nút click
        let insert=this.document.querySelector("div.insert i");
        let insert1=this.document.querySelector("input.insert-1")
//Lấy form đăng bài
        let form=this.document.querySelector(".form");
        let form1=this.document.querySelector(".form-1");
//Sự kiện click ẩn hiện form
        insert.addEventListener("click", function(){
            $(form).toggle(1000)
            // form.classList.toggle("show");
        })
        insert1.addEventListener("click", function(){
            $(form1).toggle(1000)
            // form1.classList.toggle("show");
        })
//Sự kiện click nút thông báo
        let bell=this.document.querySelector("li.bell i");
        let thongbao=this.document.querySelector(".ThongBao");
        bell.addEventListener("click",function(){
            $(thongbao).toggle(1000)
            // thongbao.classList.toggle("show")
        })
//Thêm tin khi ấn nút đăng
        let btn=this.document.getElementById("btnAdd");
        let news=this.document.querySelector(".new-2");
        btn.addEventListener("click", function(){
            let name_bandau=document.getElementById("name")
            let name=document.getElementById("name").value;
            let image=document.getElementById("image").value;
            let h=`
                <ul class="new">
                    <div class="icon-user">
                        <i class="fa fa-user-circle-o"></i>
                    </div>
                    <div class="new-img"><img src="${image}" alt="user"/></div>
                    <div class="name-user">${name}</div>
                </ul>
            `;
            news.innerHTML=h+news.innerHTML;
            // form.classList.toggle("show");
            name_bandau.value="";
        //     let neww=document.querySelector(".new:first-child");
        //    neww.insertAdjacentHTML(p,h);
        })
//Thêm bài viết khi ấn nút đăng
        let btn1=this.document.getElementById("btnAdd1");
        let mid_articles=this.document.querySelector(".mid-articles");
        btn1.addEventListener("click",function(){
            let chiase1=document.querySelector(".insert-1")
            let chiase=document.querySelector(".insert-1").value;
            let image_article=document.getElementById("image-article").value;
            let h1=`
            <div class="mid-article">
                    <div class="mid-article-top ">
                        <div class="flex">
                            <li><a href="#"><i class="fa fa-user-circle-o"></i></a></li>
                            <li><a href="#">Thanh Bình</a></li>
                        </div>
                        <div class="mid-article-top-title">${chiase}</div>
                    </div>
                    <div class="mid-article-mid">
                        <div class="picture">
                            <div class="scrolls flex">
                                <li class="scroll-prev"><i class='fas fa-angle-double-left'></i></li>
                                <li class="scroll-next"><i class='fas fa-angle-double-right'></i></li>
                            </div>
                            <div class="list-picture"> 
                                <img src="${image_article}" alt="webdesign"/>
                                <a href="#" class="delete">&times;</a>
                            </div>
                        </div>
                    </div>
                    <div class="mid-article-foot">
                        <ul class="icon-like">
                            <li><i class="fas fa-heart"></i>
                                <div class="des-like">
                                    <p>Yêu thích</p>
                            </div></li>
                            <li><i class="far fa-comment"></i>
                                <div class="des-like">
                                    <p>Bình luận</p>
                            </div>
                                <li>
                            <li><i class="fas fa-paper-plane"></i>
                                <div class="des-like">
                                    <p>Chia sẻ</p>
                            </div>
                            </li>
                        </ul>
                        <ul class="liked">
                            <li>0 lượt thích</li>
                            <li class="liked-comment">0 bình luận</li>
                            <li>0 lượt chia sẻ</li>
                        </ul>
                        <div class="comment-user">
    
                        </div>
                        <ul class="comment flex">
                            <li><a href="#"><i class="fa fa-user-circle-o"></i></a></li>
                            <div class="container_mid">
                                <input class="insert-comment" type="text" placeholder="Viết bình luận..."/>
                                <button class="sent-comment" type="button"><i class="far fa-paper-plane"></i></button>
                           </div>
                        </ul>
                    </div>
                </div>
            `;
            mid_articles.innerHTML=h1+mid_articles.innerHTML;
            // let prod=document.querySelector(".mid-articles");
            // prod.insertAdjacentHTML("beforebegin",h1);
            // form1.classList.toggle("show");
            chiase1.value="";
        })
//Tìm kiếm bạn bè
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
        
        let imagee =document.querySelectorAll("#imagee");   
        for(let img_zoom of imagee){
            img_zoom.addEventListener("click", function() {
                if (img_zoom.classList.contains('fullscreen')) {
                    img_zoom.classList.remove('fullscreen');
                    document.body.style.overflow = 'auto';
                }
                else {
                    img_zoom.classList.add('fullscreen');
                    document.body.style.overflow = 'hidden';
            }
        });
        }
});
