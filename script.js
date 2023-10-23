const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
});

Shery.textAnimate("#headings h1" , {  
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2", {
    stagger: .3,
    y: 50,
    duration: 1,
    ease: Expo,
    opacity: 0
});

Shery.imageEffect(".imgeff img", {
    style: 4,
    config: {"uFrequencyX":{"value":22.31,"range":[0,100]},"uFrequencyY":{"value":24.79,"range":[0,100]},"uFrequencyZ":{"value":13.22,"range":[0,100]},"geoVertex":{"range":[1,64],"value":30.68},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500052582715379},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  })
  Shery.imageEffect("#imgntext img", {
    style: 3,
    config: {"uFrequencyX":{"value":8.26,"range":[0,100]},"uFrequencyY":{"value":17.36,"range":[0,100]},"uFrequencyZ":{"value":29.75,"range":[0,100]},"geoVertex":{"range":[1,64],"value":7.77},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500052582715379},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":false},"uSpeed":{"value":0.52,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.24,"range":[0,5]},"uFrequency":{"value":2.31,"range":[0,10]}}

    
  })
  Shery.imageEffect("#bimg", {
    style: 5,  
    config:{"a":{"value":1.24,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"aspect":{"value":2.0686274509803924},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.87,"range":[0,10]},"metaball":{"value":0.26,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.3,"range":[0,2]},"noise_scale":{"value":9.35,"range":[0,100]}}, gooey: true });
 
     
  //  document.querySelector("#ftext button")
  //  .addEventListener("mouseover", function(){
  //    gsap.to("#future vedio",{
  //       opacity: 1,
  //       duration: 1.5,
  //       ease: Power4
  //    })
  //  })

  document.querySelector("#ftext button")
  .addEventListener("mouseover", function(){
    gsap.to("#future video", {
       opacity: 1,
       duration: 1,
       ease: Power4
    })
  });

  document.querySelector("#ftext button")
  .addEventListener("mouseleave", function(){
    gsap.to("#future video", {
       opacity: 0,
       duration: 1,
       ease: Power4
    })
  });