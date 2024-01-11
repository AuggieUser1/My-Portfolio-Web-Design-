$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Photographer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Photographer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// contact email
//const form = document.querySelector('form');
//const Name = document.getElementById("name");
//const email = document.getElementById("email");
//const subject = document.getElementById("subject");
//const mess = document.getElementById("message");

//function sendEmail() {
   // const bodyMessage = 'Name: ${Name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}';

  //  Email.send({
   //     Host : "smtp.elasticemail.com",
     //   Username : "antonagustinsarigumba15@gmail.com",
      // Password : "46DE5D118728280F4A031D6F0169DD0B7B73",
       // To : 'antonagustinsarigumba15@gmail.com',
       // From : "antonagustinsarigumba15@gmail.com",
       // Subject :  "This is the subject",
      //  Body :  "And This is the body",
   // }).then(
   //   message => {
     //   if (message == "OK") {
     //       Swal.fire({
       //         title: "Success!",
         //       text: "Message sent successfully!",
          //      icon: "success"
          //  });
       // }
     // }
   // );
//}

//form.addEventListenerz("submit", (e) => {
   // e.preventDefault();

   // sendEmail();
// });
