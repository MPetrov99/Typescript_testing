/* Animation */

let target:HTMLDivElement = document.querySelector(".two");
document.addEventListener("click", (ev:MouseEvent) => {
    let test = ev.target as HTMLElement;
    if (test.classList.contains("rect")) {
        let gap = target.offsetLeft - (test.offsetWidth + test.offsetLeft);

        let offsetLeft = gap + test.offsetWidth;

        let keyframe = `
        @keyframes spaceSwapLeft {
            from {
                left: 0;
            }
            to {
                left: ${offsetLeft}px;
            }
        } `;
        let style = document.querySelector("#keyframe");
        style.innerHTML = keyframe;

        test.style.animation = "spaceSwapLeft 1s ease-in-out forwards";
        test.style.zIndex = "1";
        test.style.backgroundColor = "yellow";
    }
});