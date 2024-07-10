function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoscroll()

function cursorEffect (){
    var page1Content = document.querySelector("#page1content");
    var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(event) {
    gsap.to(cursor,{
        x:event.x,
        y:event.y
    })
});

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

gsap.registerPlugin(ScrollTrigger);

function page2animation(){
    gsap.from(".elem h1",{
        y:140,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
    gsap.from(["#page2-top h2, #page2-top h3"],{
        y:70,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
}
page2animation()

document.addEventListener("DOMContentLoaded", function() {
    const underlineEffect = document.querySelector('.underline-effect');
    underlineEffect.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
});

function page5anim(){
    gsap.from("#page5-text h2",{
        y:140,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page5 ",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
    gsap.from(["#page5-top h4, #page5-top h3"],{
        y:70,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
}
page5anim()

function page3anim(){
    gsap.from(["#page3-top h4","#page3-top h2"],{
        y:140,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page3 ",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
}

page3anim()

// function cursorEffect1 (){
//     var page6Content = document.querySelector("#page6");
//     var cursor1 = document.querySelector("#cursor1");

//     page6Content.addEventListener("mousemove", function(event) {
//         gsap.to(cursor1,{
//             x:event.x,
//             y:event.y,
//             duration:0.1
//         });
//     });

//     page6Content.addEventListener("mouseenter",function(){
//         gsap.to(cursor1,{
//             scale:1,
//             opacity:1
//         })
//     })

//     page6Content.addEventListener("mouseleave",function(){
//         gsap.to(cursor1,{
//             scale:0,
//             opacity:0
//         })
//     })
// }
// cursorEffect1()
// function cursorEffect1() {
//     var page6 = document.querySelector("#page6");
//     var cursor = document.querySelector("#cursor1");

//     page6.addEventListener("mousemove", function(event) {
//         gsap.to(cursor,{
//             x: event.clientX,
//             y: event.clientY,
//             duration: 0.1
//         })
//         page6.addEventListener("mouseenter",function(){
//             gsap.to(cursor,{
//                 scale:1,
//                 opacity:1
//             })
//         })

//         page6.addEventListener("mouseleave",function(){
//             gsap.to(cursor,{
//                 scale:0,
//                 opacity:0
//             })

//     })

// })
// }
// cursorEffect1();


function page6anim(){
const cursor = document.querySelector('#page6 #cursor1')
const svg = document.querySelector('#page6')

svg.addEventListener('mousemove', (ev) => {
  gsap.to(cursor,{
    x: ev.x-50+"px",
    y: ev.y-100+"px"
  })
})
svg.addEventListener("mouseenter", ()=>{
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
svg.addEventListener("mouseleave", ()=>{
  gsap.to(cursor,{
      scale:0,
      opacity:0
  })
})
}
page6anim()
function page7anim(){
    gsap.from("#page7-content h2",{
        y:140,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page7 ",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
    gsap.from(["#page7-top h4, #page7-top h3"],{
        y:70,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
        }
    })
}
page7anim()

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//       },
//     speed:600,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 15,
        loop:true,  
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      speed:7000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

swiper()

function loader(){
    var tl = gsap.timeline()

    tl.from("#loader h3 " ,{
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1
    })

    tl.to("#loader",{
        opacity:0
    })

    tl.from("#page1content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5
    })

    tl.to("#loader",{
        display: "none"
    })
}

loader()

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    document.querySelectorAll('#page6 svg').forEach(element => {
        observer.observe(element);
    });
});