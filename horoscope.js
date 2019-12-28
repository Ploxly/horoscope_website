//detect that the selector has change and figure out which value it has changed to ✔
//Once I figure out the value check if value is aries ✔
// if aries replace some text on screen with a horoscope ✔
// at least 4 different horoscope types ✔
//both horoscope and gender has to be modified from their default values before a horoscope shows ✔

function generateHoroscope() {
    let zodiac_select = document.getElementById("zodiac_select");
    let gender_select = document.getElementById("gender_select");
    let select_value_zodiac = zodiac_select.options[zodiac_select.selectedIndex].value;
    let select_value_gender = gender_select.options[gender_select.selectedIndex].value;


    let welcome_msg = document.getElementById("welcome_message");

    if (select_value_zodiac == "Aries" && select_value_gender == "Male") {

        welcome_msg.innerText = "You've got horns today"
        return;
    }
    else if (select_value_zodiac == "Taurus" && select_value_gender == "Female") {

        welcome_msg.innerText = "Toss the salad!"
        return;
    }
    else if (select_value_zodiac == "Gemini" && select_value_gender == "Other") {

        welcome_msg.innerText = "Eat lots of fortune cookies"
        return;
    }
    else if (select_value_zodiac == "Cancer" && select_value_gender == "Male") {

        welcome_msg.innerText = "Get some rest.."
        return;
    }
    else {
        return welcome_msg.innerText = "Welcome! Please choose your zodiac sign and gender to begin...";
    }
}

function main() {
    document.addEventListener("DOMContentLoaded",function(){
        let zodiac_select = document.getElementById("zodiac_select");
        let gender_select = document.getElementById("gender_select");

        zodiac_select.addEventListener("change", function(){
            generateHoroscope()
        })
        gender_select.addEventListener("change", function(){
            generateHoroscope()
        })
    });
}

main()