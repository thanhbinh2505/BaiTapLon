$(document).ready(function(){
    //Đổi hình chúc mừng sinh nhật
    var x=1;
    setInterval(function() {
        x++;
        if(x>$(".left-img img").length){
            x=1;
        }
        $(".left-img img").fadeOut(2000,function(){
            $(`.left-img img:nth-child(${x})`).fadeIn(2000);
        });
    }, 5000);
//ĐỔi hình quảng cáo
    var xyz=1;
    let width=$(".right-top-img img").width()
    setInterval(function() {
        xyz++
        $(".right-top-img").animate({scrollLeft: `+=${width}`},2000);
        if(xyz==$(".right-top-img img").length){
            width=width*-1
            xyz=1
         }  
    }, 5000);
//nháy màu chữ
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1'];
    setInterval(function(){
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        $(".happy-run p").css('color', randomColor);
    }, 1000);
//Thả tym bài viết
    $(".mid-articles").on("click",".icon-like>li:first-child i",function(){
        var x=$(this).css("color")
        if(x=="rgb(128, 128, 128)"){
            $(this).css("color", "red")
            $(this).closest(".icon-like").next().find("li:first-child").text("1 lượt thích")
        }
            
        else{
            $(this).css("color", "rgb(128, 128, 128)")
            $(this).closest(".icon-like").next().find("li:first-child").text("0 lượt thích")
        }
    });
    //comment bài viết
    $(".mid-articles").on("click",".sent-comment", function(){
        let insert_comment=this.previousElementSibling.value
        let insert_comment1=this.previousElementSibling
        if(insert_comment!==""){
        let comment_user=this.parentElement.parentElement.previousElementSibling
        let comment1=`
        <li class="commented">
            <i class="fa fa-user-circle-o"></i> Thanh Bình
            <p>${insert_comment}</p></li>
        `;
        comment_user.innerHTML=comment1+comment_user.innerHTML;
        insert_comment1.value="";
//Cập nhật số lần comment
        let $article=$(this).closest(".mid-article");
        let $commentList=$article.find(".comment-user");
        let commentCount=$commentList.find("li").length;
        $article.find("li.liked-comment").text(`${commentCount} bình luận`);
    }});   

//Nút cuộn story 
    $(".scroll-right").click(function(){
        $(".news").animate({scrollLeft: "+=300"},1000);
    })
    $(".scroll-left").click(function(){
        $(".news").animate({scrollLeft: "-=300"},1000);
    })
//Nút cuộn bài viết
    $(".mid-articles").on("click",".scroll-next",function(){
        $(this).closest(".picture").animate({scrollLeft: "+=585px"},1000);
    })
    $(".mid-articles").on("click",".scroll-prev",function(){
        $(this).closest(".picture").animate({scrollLeft: "-=585px"},1000);
    })
//Ẩn hiện nút scroll
    $(".mid_intension").on("click",".btn", function(){
        let counts = $(".mid-article")
        for(let count of counts){
            if($(count).find(".list-picture img").length==1){
            $(count).find(".scroll-next, .scroll-prev").css("z-index", "-99")
            }
       } 
    })
    let counts = $(".mid-article")
        for(let count of counts){
            if($(count).find(".list-picture img").length==1){
            $(count).find(".scroll-next, .scroll-prev").css("z-index", "-99")
            }
       } 
    
});
