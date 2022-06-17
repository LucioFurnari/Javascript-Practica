
const body = document.querySelector("body");

let rt = document.querySelector(":root"),
    cssVar = getComputedStyle(rt);

export function bcChangeColor(weather){
    switch (weather) {
        case "Clear":
            body.style.background = cssVar.getPropertyValue("--backgroundSunny");
            break;
        case "Clouds":
            body.style.background = cssVar.getPropertyValue("--backgroundFoggy");
            break;
        default:
            break;
    }
}