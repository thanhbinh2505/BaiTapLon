window.addEventListener('load',function(){
    
    $(".createacc").click(function(){
        $(".form-login").slideUp(1000);
        setTimeout(() => {
            $(".form-create").slideDown(1000);
        }, 1000);
    })
    $(".sub-cr").click(function(){
        if($("#name-cr").val()!="" || $("#pass-cr").val()!="" || $("#cf-pass-cr").val()!="" || $("#date").val()!=""){
            if($("#pass-cr").val()==$("#cf-pass-cr").val()){

                $(".form-create").slideUp(1000);
                setTimeout(() => {
                    $(".form-login").slideDown(1000);
                }, 1000);
                $(".done-crs").fadeIn(1000)
                setTimeout(() => {
                    $(".done-crs").fadeOut(500)
                }, 1500);
            }
            else{
               aa= setInterval(function(){
                    $("#cf-pass-cr").css('color', "red")
                    $("#pass-cr").css('color', "red")
                    setTimeout(() => {
                        $("#cf-pass-cr").css('color', "blue")
                        $("#pass-cr").css('color', "blue")
                    }, 250);
                }, 500);
                $("#cf-pass-cr").click(function(){
                    clearInterval(aa)
                    $("#cf-pass-cr").css('color', "aliceblue")
                    $("#pass-cr").css('color', "aliceblue")
                })
                $("#pass-cr").click(function(){
                    clearInterval(aa)
                    $("#cf-pass-cr").css('color', "aliceblue")
                    $("#pass-cr").css('color', "aliceblue")
                })
            }
        }
        
    })
    $(".login").click(function(){
        if($("#name").val()!="" || $("#pass").val()!=""){
            if($("#name-cr").val()==$("#name").val() && $("#pass-cr").val()==$("#pass").val() ){
                $("a").attr("href","index1.html")
            }
            else{
                aaa= setInterval(function(){
                    $("#pass").css('color', "red")
                    $("#name").css('color', "red")
                    setTimeout(() => {
                        $("#pass").css('color', "blue")
                        $("#name").css('color', "blue")
                    }, 250);
                }, 500);
                $("#name").click(function(){
                    clearInterval(aaa)
                    $("#name").css('color', "aliceblue")
                    $("#pass").css('color', "aliceblue")
                })
                $("#pass").click(function(){
                    clearInterval(aaa)
                    $("#name").css('color', "aliceblue")
                    $("#pass").css('color', "aliceblue")
                })
            }
        }
        
    })
    
})