console.log("script conneted: true");

let air1 = document.getElementById("air1");

air1Move();

function air1Move() {
    let myWidth = air1.clientWidth;
    let myHeight = air1.clientHeight;
    let parentWidth = air1.parentElement.clientWidth;
    let parentHeight = air1.parentElement.clientHeight;

    air1.style.left = "-" + myWidth + "px";
    air1.style.bottom = "-" + myHeight + "px";

    let startX = -1 * myWidth;
    let finishX = parentWidth;
    let totalX = Math.abs(finishX - startX);

    let startY = -1 * myHeight;
    let finishY = parentHeight;
    let totalY = Math.abs(finishY - startY);

    let startScale = 1.0;
    let finishScale = 0.3;
    let totalScale = Math.abs(finishScale - startScale);

    let smallMovingUnit = 2000.0;

    let unitX = totalX / smallMovingUnit;
    let unitY = totalY / smallMovingUnit;
    let unitScale = totalScale / smallMovingUnit;

    setInterval(() => {
        let posX = startX + "px";
        let posY = startY + "px";
        console.log(posX, posY, startScale);

        document.getElementById("air1").style.left = posX;
        document.getElementById("air1").style.bottom = posY;
        document.getElementById("air1").style.transform = "rotate3d(0, 0, 1, -20deg) scale(" + startScale + ")";

        startX += unitX;
        startY += unitY;
        startScale -= unitScale;

        if (parseInt(startX) == finishX) {
            setTimeout(() => {
                startX = -1 * myWidth;
                startY = -1 * myHeight;
                startScale = 1.0;
            }, 3000);
        }
    }, 1);
}