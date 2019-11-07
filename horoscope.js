//detect that the selector has change and figure out which value it has changed to
//Once I figure out the value check if value is aries 
// if aries replace some text on screen with a horoscope

function generateHoroscope() {
    let horoscope_select = document.getElementById("horoscope_select");
    let select_value = horoscope_select.options[horoscope_select.selectedIndex].value;

    console.log(select_value)
    return;
}

function main() {
    document.addEventListener("DOMContentLoaded",function(){
        generateHoroscope()
    });
}