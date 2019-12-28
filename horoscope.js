//detect that the selector has change and figure out which value it has changed to ✔
//Once I figure out the value check if value is aries ✔
// if aries replace some text on screen with a horoscope ✔
// at least 4 different horoscope types
//both horoscope and gender has to be modified from their default values before a horoscope shows

function generateHoroscope() {
    let zodiac_select = document.getElementById("zodiac_select");
    //let gender_select = document.getElementById("gender_select");
    let select_value_zodiac = zodiac_select.options[zodiac_select.selectedIndex].value;
    //let select_value_gender = gender_select.options[gender_select.selectedIndex].value;


    let welcome_msg = document.getElementById("welcome_message");

    if (select_value_zodiac == "Aries") {

        welcome_msg.innerText = "Well done!"
       // change_welcome_msg.innerHTML = "" .replace(/Welcome! Please choose your zodiac sign and gender to begin.../g, "Well done!")
        return;
        
    }
    else {
        return welcome_msg.innerText = "Welcome! Please choose your zodiac sign and gender to begin...";
    }

    //console.log(select_value_zodiac, select_value_gender)
    //return;
}

function main() {
    document.addEventListener("DOMContentLoaded",function(){
        let zodiac_select = document.getElementById("zodiac_select");

        zodiac_select.addEventListener("change", function(){
            generateHoroscope()
        })
    });
}

main()