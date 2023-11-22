$(document).ready(function(){
    $("#subform").validate({
        rules:{
            username:{
                required:true,
                
            },
            gmail:{
                email:true,
                required:true
               
            },
            textar:{
                required:true
            }
        },

        messages:{
            username:"Enter your name",
            gemail:"Enter your mail",
            textar:"This area need some text"
        }
    })
})

