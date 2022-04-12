const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {
    // Maak hier oefening 2
    document.querySelector('#tableRow').innerHTML = "";
    let tablebody = document.getElementById('tableBody');
    let tablerow = document.getElementById('tableRow');

    for (i = 0; i < rainbow.length; i++) {
        let cel = document.createElement('td');
        cel.style.textAlign = 'center';
        cel.innerText = rainbow[i];

        tablerow.appendChild(cel);

        cel.addEventListener('mouseover', hover, false);

        function hover() {
            cel.style.color = 'white';
            cel.style.backgroundColor = kleur;
        }

        cel.addEventListener('mouseout', normaal, false);

        function normaal() {
            cel.style.color = 'black';
            cel.style.backgroundColor = 'white';
        }

        cel.addEventListener('click', positie, false);

        const kleur = rainbow[i];

        function positie() {
            let input = 0;
            let nieuwerij = document.createElement('tr');
            tablebody.append(nieuwerij);

            while (input > rainbow.length || input < 1 || isNaN(input)) {
                input = prompt(`At which position should i add it (1-${rainbow.length})?`);
            }
            for (let i = 0; i < rainbow.length; i++) {
                if (i == input - 1) {
                    let cel2 = document.createElement('td');
                    cel2.innerText = cel.innerText;
                    cel2.style.backgroundColor = cel.innerText;
                    cel2.style.textAlign = 'center';
                    cel2.style.color = 'white';
                    cel2.addEventListener('click', function() {
                        let kieskleur = 'kieskleur';
                        while (isValidColor(kieskleur) == false && checkHex(kieskleur) == false) {
                            kieskleur = prompt(`Which color whould you like to add?`);
                        }
                        cel2.style.backgroundColor = kieskleur;
                        cel2.style.color = 'white';
                        cel2.innerText = kieskleur;
                    }, false);
                    nieuwerij.appendChild(cel2);
                } else {
                    let cel2 = document.createElement('td');
                    cel2.style.textAlign = 'center';
                    cel2.style.backgroundColor = 'white';
                    cel2.addEventListener('click', function() {
                        let kieskleur = 'kieskleur';
                        while (isValidColor(kieskleur) == false && checkHex(kieskleur) == false) {
                            kieskleur = prompt(`Which color whould you like to add?`);
                        }
                        cel2.style.backgroundColor = kieskleur;
                        cel2.style.color = 'white';
                        cel2.innerText = kieskleur;
                    }, false);
                    nieuwerij.appendChild(cel2);
                }
            }
        }

        function isValidColor(strColor) {
            var s = new Option().style;
            s.color = strColor;
            return s.color == strColor.toLowerCase();
        }

        function checkHex(value) {
            return /^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(value)
        }
    }
}