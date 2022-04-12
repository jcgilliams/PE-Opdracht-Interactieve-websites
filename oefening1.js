// Maak hier oefening 1
Validatie = () => {
    const voornaam = document.querySelector("#voornaam").value;
    const naam = document.querySelector("#naam").value;
    const emailadres = document.querySelector("#email").value;
    const adres = document.querySelector('#address').value;
    const land = document.querySelector('#country').value;
    const provincie = document.querySelector('#province').value;
    const postcode = document.querySelector('#postalCode').value;


    if (voornaam == "" || naam == "" || emailadres == "" || validateEmail(email) == false || adres == "" ||
        land == "Choose a country" || provincie == "Choose a province" || postcode == "" ||
        validatePostcode(postalCode) == false) {

        let el = document.createElement('div');
        el.setAttribute('class', 'col-md-4 container-fluid');
        el.setAttribute('id', 'validatie');
        document.querySelector('#formulier').appendChild(el);

        let resultaat = '<div class="alert alert-danger">';

        resultaat += '<h6>You messed up ... </h6>'
        if (voornaam == "") {
            resultaat += 'First name is required.<br>';
        }
        if (naam == "") {
            resultaat += 'Name is required.<br>';
        }
        if (emailadres == "") {
            resultaat += 'Email is required.<br>'
        }
        if (validateEmail(email) == false) {
            resultaat += 'Email is not valid.<br>'
        }
        if (adres == "") {
            resultaat += 'Address is required.<br>'
        }
        if (land == "Choose a country") {
            resultaat += 'Country is required.<br>'
        }
        if (provincie == "Choose a province") {
            resultaat += 'Province is required.<br>'
        }
        if (postcode == "") {
            resultaat += 'Postal code is required.<br>'
        }
        if (validatePostcode(postalCode) == false) {
            resultaat += 'Postal code value must be between 1000 & 9999.<br>'
        }

        resultaat += '</div>';
        document.querySelector('#validatie').innerHTML = resultaat;
    } else {
        let resultaat = '<div class="alert alert-success">';
        resultaat += '<h6>Good shit </h6>'
        resultaat += 'You just successfully subscribed';
        resultaat += '</div>';
        document.querySelector('#validatie').innerHTML = resultaat;
    }

    function validateEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            document.formulier.email.focus();
            return true;
        } else {
            document.formulier.email.focus();
            return false;
        }
    }

    function validatePostcode(postalCode) {
        var postcodeformat = /^[1-9]{1}[0-9]{3}$/;
        if (postalCode.value.match(postcodeformat)) {
            document.formulier.postalCode.focus();
            return true;
        } else {
            document.formulier.postalCode.focus();
            return false;
        }
    }
    document.getElementById("formulier").addEventListener("click", function(event) {
        event.preventDefault()
    });
}