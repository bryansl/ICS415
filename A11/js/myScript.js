$(".answer").hide(function(){
});

$(".q1").click(function(){
    if($(".q1 .status").text()=="(+)  ")
    {
        $(".q1 .status").text("( - )  ");
        $(".a1").toggle();
    }
    else
    {
        $(".q1 .status").text("(+)  ");
        $(".a1").toggle();
    }  
});

$(".q2").click(function(){
    if($(".q2 .status").text()=="(+)  ")
    {
        $(".q2 .status").text("( - )  ");
        $(".a2").toggle();
    }
    else
    {
        $(".q2 .status").text("(+)  ");
        $(".a2").toggle();
    }  
});

$(".q3").click(function(){
    if($(".q3 .status").text()=="(+)  ")
    {
        $(".q3 .status").text("( - )  ");
        $(".a3").toggle();
    }
    else
    {
        $(".q3 .status").text("(+)  ");
        $(".a3").toggle();
    }  
});

$(".q4").click(function(){
    if($(".q4 .status").text()=="(+)  ")
    {
        $(".q4 .status").text("( - )  ");
        $(".a4").toggle();
    }
    else
    {
        $(".q4 .status").text("(+)  ");
        $(".a4").toggle();
    }   
});

$(".q5").click(function(){
    if($(".q5 .status").text()=="(+)  ")
    {
        $(".q5 .status").text("( - )  ");
        $(".a5").toggle();
    }
    else
    {
        $(".q5 .status").text("(+)  ");
        $(".a5").toggle();
    }    
});

