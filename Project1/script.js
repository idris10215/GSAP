let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x : e.x,
        y : e.y,
        duration : 0.3,
        ease : "back.out"
    })
})

imageDiv.addEventListener("mouseenter", function (e) {
    
    cursor.innerHTML = "View";

    gsap.to(cursor, {
        scale : 3,
    })
})

imageDiv.addEventListener("mouseleave", function (e) {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale : 1,
    })
})
