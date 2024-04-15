const c = document.querySelector("#celcius");
const d = document.querySelector("#degree");
const convert = document.querySelector("#convert");
const t = document.querySelector("#type");

window.addEventListener("load", () => {
    d.value = "";
    c.innerHTML = ""; 
});

convert.addEventListener("click", (e) => {
    e.preventDefault();
    tempconvert();
    convert.innerHTML = "<span><i class='fas fa-spinner'></i> Converting...</span>";
    setTimeout(() => {
        convert.innerHTML = "<span>Convert</span>";
    }, 1000);
});

function tempconvert() {
    let input = d.value;
    if (t.value === "Fahrenheit") {
        const ftc = (input - 32) * (5 / 9);
        c.innerHTML = `${ftc.toFixed(3)} &deg;C`;
    } else if (t.value === "Kelvin") {
        const ktc = input - 273.15;
        c.innerHTML = `${ktc.toFixed(3)} &deg;C`;
    }
}
