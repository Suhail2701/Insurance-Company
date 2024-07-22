
document.addEventListener('DOMContentLoaded', function () {
    function generateUniqueCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 7; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;

    }

    let uniqueCode = generateUniqueCode();

    const registrationForm = document.querySelector("#registrationForm");

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            customerId: uniqueCode,
            name: document.getElementById('fname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            contact: document.getElementById('Number').value,
            nomineeName: document.getElementById('Nname').value,
            reWithNominee: document.getElementById('RNname').value
        }

        let existingData = JSON.parse(localStorage.getItem('users')) || [];

        existingData.push(formData);

        if (document.getElementById('fname').value && document.getElementById('email').value) {
            localStorage.setItem('users', JSON.stringify(existingData));
        }
        else {
            alert('Please enter your details');
        }

        if (document.getElementById('fname').value && document.getElementById('email').value) {
            window.location.href = 'index1.html?customerId=' + uniqueCode;
        }

        document.getElementById('fname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('Number').value = '';
        document.getElementById('Nname').value = '';
        document.getElementById('RNname').value = '';
        document.getElementById('address').value = '';

    });

    const toLogin = document.getElementById('toLogin');
    toLogin.addEventListener('click', function () {
        window.location.href = "index2.html";
    });

});


