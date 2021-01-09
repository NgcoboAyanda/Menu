//dom elements
const topLine = document.querySelector('.top');
const middleLine = document.querySelector('.middle');
const bottomLine = document.querySelector('.bottom');
const body = document.querySelector('body');

//gsap timeline


body.addEventListener('click',e=>{
        //open menu animation
        if(e.target.classList.contains('openMenu')){
            gsap.to(topLine,{duration:0.6,rotate:45, y: 22.5})
            gsap.to(middleLine,{duration:0.5, opacity:0, x:-20})
            gsap.to(bottomLine,{duration:0.6,rotate:-45, y:-22.5})
            e.target.classList.remove('openMenu');
            e.target.classList.add('closeMenu');
        }
        //close menu animation
        else if(e.target.classList.contains('closeMenu')){
            gsap.to(topLine,{duration:.3,rotate:0, y: 0})
            gsap.to(middleLine,{duration:0.3, opacity:1, x:0})
            gsap.to(bottomLine,{duration:.3,rotate:0, y:0})
            e.target.classList.remove('closeMenu');
            e.target.classList.add('openMenu');
        }
});
