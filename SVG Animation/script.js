let path = `M 0 100 Q 500 100 1000 10`
let finalPath = `M 0 100 Q 500 100 1000 100`

let string = document.querySelector("#string");
string.addEventListener("mousemove", function(det) {
    path = `M 0 100 Q ${det.x} ${det.y} 1000 100`;
    gsap.to("svg path", {
        attr : {
            d : path,
        },
        duration : 0.3,
        ease : "power3.out"
    })
    console.log(path);
})

string.addEventListener("mouseleave", function(det) {
    gsap.to("svg path", {
        attr : {d : finalPath},
        duration : 1.2,
        ease : "elastic.out(1, 0.2)"
    })
})
