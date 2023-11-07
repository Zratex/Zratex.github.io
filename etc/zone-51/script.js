const circle = document.getElementById("Bob");
circle.addEventListener("click", function(){
    gsap.to(circle,{y: 300, duration: 2});
});

const transitionButton = document.getElementById("transitionButton");

transitionButton.addEventListener("click", function () {
    gsap.to("body", {
        duration: 0.5,
        opacity: 0,
        onComplete: function () {
            window.location.href = "page2.html";
        },
    });
});