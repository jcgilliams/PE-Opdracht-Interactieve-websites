const questions = [
    'Where did Frodo destroy the One Ring?',
    'What is Batman\'s real name?',
    'Which company developed the video game Minecraft?',
    'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
    'Who likes to jump around on his tail in the Winnie The Pooh stories?'
];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];
// Maak hier oefening 3
function oefening3() {
    document.querySelector('.oefening3').innerHTML = "";
    const antwoorden = new Array();
    for (i = 0; i < questions.length; i++) {
        antwoorden.push(prompt(questions[i], ""));
    }
    for (i = 0; i < questions.length; i++) {
        let el = document.createElement('div');
        el.setAttribute('id', 'antwoord');
        el.style.color = 'white';
        el.style.textAlign = 'center';
        el.style.margin = "2px 2px 2px 2px";
        el.style.padding = "10px 10px 10px 10px";
        el.style.borderRadius = "5px"

        if (antwoorden[i] === answers[i]) {
            el.style.backgroundColor = 'green';
            el.innerHTML = "<h5>" + questions[i] + "</h5>" + "You answered: " + antwoorden[i];
        } else {
            el.style.backgroundColor = 'red';
            el.innerHTML = "<h5>" + questions[i] + "</h5>" + "You answered: " + antwoorden[i] + "<br>" +
                "The correct answers was " + answers[i];
        }
        document.querySelector('.oefening3').appendChild(el);
    }
}