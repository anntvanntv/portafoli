let lista = document.querySelectorAll(".lista");
/* 
$(document).ready(function(){
    lista.forEach((element) => {
        
    
        let hermano = element.nextElementSibling;
        let hermana = element.previousElementSibling;
        let prima = element.previousElementSibling.previousElementSibling;
        let primo = element.nextElementSibling.nextElementSibling;
       
        $(element).mouseover(function(){
            $(hermano).addClass("hidden");
            $(hermana).addClass("hidden");
            $(primo).addClass("hidden");
            $(prima).addClass("hidden");
            
        });
        $(element).mouseout(function(){
            $(hermano).removeClass("hidden");
            $(hermana).removeClass("hidden");
            $(primo).removeClass("hidden");
            $(prima).removeClass("hidden");
        }) 
    })
})    */ 



$(document).ready(function(){
    lista.forEach((element) => {
        
    if(element.nextElementSibling){
        let hermano = element.nextElementSibling;
        let primo = element.nextElementSibling.nextElementSibling;
        let hermana = element.previousElementSibling;
        $(element).mouseover(function(){
            $(hermano).addClass("hidden");
            $(hermana).addClass("hidden");
            $(primo).addClass("hidden");
        });
        $(element).mouseout(function(){
            $(hermano).removeClass("hidden");
            $(hermana).removeClass("hidden");
            $(primo).removeClass("hidden");
        }) 
        } else {
            let hermana = element.previousElementSibling;
            let prima = element.previousElementSibling.previousElementSibling;
            $(element).mouseover(function(){
            $(hermana).addClass("hidden");
            $(prima).addClass("hidden");
        });
        $(element).mouseout(function(){
           
            $(hermana).removeClass("hidden");
            $(prima).removeClass("hidden");
        }) 
    }
        // let hermano = element.nextElementSibling;
        // let hermana = element.previousElementSibling;
        // let prima = element.previousElementSibling.previousElementSibling;
        // let primo = element.nextElementSibling.nextElementSibling;
       /* 
        $(element).mouseover(function(){
            $(hermano).addClass("hidden");
            $(hermana).addClass("hidden");
            $(primo).addClass("hidden");
            $(prima).addClass("hidden");
            
        });
        $(element).mouseout(function(){
            $(hermano).removeClass("hidden");
            $(hermana).removeClass("hidden");
            $(primo).removeClass("hidden");
            $(prima).removeClass("hidden");
        })  */
    })
})    