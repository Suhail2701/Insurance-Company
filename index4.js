
document.addEventListener('DOMContentLoaded', function () {

    const policyData = {
        life: [
            { title: "Term Life Plan", sumAssured: 500000, premiumAmount: 5000, policyTerm: 20 },
            { title: "Whole Life Assurance", sumAssured: 1000000, premiumAmount: 10000, policyTerm: 30 },
            { title: "Endowment Plan", sumAssured: 700000, premiumAmount: 7000, policyTerm: 25 },
            { title: "Money Back Plan", sumAssured: 800000, premiumAmount: 8000, policyTerm: 15 },
            { title: "Unit Linked Insurance Plan (ULIP)", sumAssured: 900000, premiumAmount: 9000, policyTerm: 10 }
        ],
        health: [
            { title: "Individual Health Plan", sumAssured: 100000, premiumAmount: 1000, policyTerm: 1 },
            { title: "Family Floater Health Plan", sumAssured: 200000, premiumAmount: 2000, policyTerm: 2 },
            { title: "Critical Illness Plan", sumAssured: 300000, premiumAmount: 3000, policyTerm: 3 },
            { title: "Senior Citizen Health Plan", sumAssured: 400000, premiumAmount: 4000, policyTerm: 4 },
            { title: "Hospital Cash Plan", sumAssured: 500000, premiumAmount: 5000, policyTerm: 5 }
        ],
        car: [
            { title: "Comprehensive Car Insurance", sumAssured: 150000, premiumAmount: 1500, policyTerm: 5 },
            { title: "Third-Party Car Insurance", sumAssured: 100000, premiumAmount: 1000, policyTerm: 3 },
            { title: "Own Damage Car Insurance", sumAssured: 200000, premiumAmount: 2000, policyTerm: 4 },
            { title: "Pay-As-You-Drive Insurance", sumAssured: 250000, premiumAmount: 2500, policyTerm: 1 },
            { title: "Zero Depreciation Car Insurance", sumAssured: 300000, premiumAmount: 3000, policyTerm: 2 }
        ],
        home: [
            { title: "Standard Fire and Special Perils Policy", sumAssured: 1000000, premiumAmount: 10000, policyTerm: 10 },
            { title: "Home Structure Insurance", sumAssured: 1500000, premiumAmount: 15000, policyTerm: 15 },
            { title: "Home Contents Insurance", sumAssured: 500000, premiumAmount: 5000, policyTerm: 5 },
            { title: "Landlord’s Insurance", sumAssured: 750000, premiumAmount: 7500, policyTerm: 7 },
            { title: "Tenant’s Insurance", sumAssured: 250000, premiumAmount: 2500, policyTerm: 3 }
        ],
        travel: [
            { title: "Single Trip Travel Insurance", sumAssured: 10000, premiumAmount: 100, policyTerm: 1 },
            { title: "Multi-Trip Travel Insurance", sumAssured: 20000, premiumAmount: 200, policyTerm: 2 },
            { title: "Family Travel Insurance", sumAssured: 30000, premiumAmount: 300, policyTerm: 3 },
            { title: "Student Travel Insurance", sumAssured: 40000, premiumAmount: 400, policyTerm: 4 },
            { title: "Senior Citizen Travel Insurance", sumAssured: 50000, premiumAmount: 500, policyTerm: 5 }
        ]
    };

    const policyType = document.querySelector('#policyType');
    const policyTitle = document.getElementById('policyTitle');


    policyType.addEventListener('change', function () {

        const policyTypeValue = document.getElementById('policyType').value;

        policyTitle.innerHTML = '';

        policyData[policyTypeValue].forEach(element => {

            const option = document.createElement('option');
            option.textContent = element.title;
            policyTitle.appendChild(option);

        });

    });



    policyTitle.addEventListener('change', function () {

        const PolicyType = document.querySelector('#policyType').value;
        const policyTitle = document.getElementById('policyTitle').value;
        const policyTerm = document.getElementById('policyTerm');

        sumAssured.innerHTML = '';
        premiumAmount.innerHTML = '';
        policyTerm.innerHTML = '';


        const selectedPolicy = policyData[PolicyType].find(policy => policy.title === policyTitle);

        populatePolicyDetails(selectedPolicy);

    });


    function populatePolicyDetails(policy) {
        document.getElementById('sumAssured').value = policy.sumAssured;
        document.getElementById('premiumAmount').value = policy.premiumAmount;
        document.getElementById('policyTerm').value = policy.policyTerm;
    }

});


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');

    // console.log(customerIDURL);

    const userData = JSON.parse(localStorage.getItem('users'));
    // console.log(userData);
    const user = userData.find(user => user.customerId === customerIDURL);

    // console.log(user);
    if (user) {
        document.getElementById('cusNameSpan').textContent = user.name;
        document.getElementById('cusIdSpan').textContent = user.customerId;
    }


    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const yera = now.getFullYear();
    //console.log(`${date}/${month}/${yera}`);


    function generateUniqueCode() {
        const numbers = '0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random() * numbers.length);
            code += numbers.charAt(random);
        }

        return code;
    }

    let uniqueCode = generateUniqueCode();
    // console.log(uniqueCode);

    const policyForm = document.querySelector('#policyForm');
    policyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userPolicyData = {
            choosePolicy: document.getElementById('policyType').value,
            policyTitle: document.getElementById('policyTitle').value,
            sumAssured: document.getElementById('sumAssured').value,
            premiumAmount: document.getElementById('premiumAmount').value,
            policyTerm: document.getElementById('policyTerm').value,
            startDate: `${date}/${month}/${yera}`,
            nextDue: `${date}/${month}/${yera + 1}`,
            status: "Active",
            nomineeReg: "Yes",
            policyNumber: uniqueCode

        };

        let existingData = JSON.parse(localStorage.getItem(customerIDURL)) || [];
        // console.log(existingData);
        existingData.push(userPolicyData);

        if (document.getElementById('sumAssured').value && document.getElementById('premiumAmount').value) {
            localStorage.setItem(customerIDURL, JSON.stringify(existingData));
        }

        if (document.getElementById('sumAssured').value && document.getElementById('premiumAmount').value) {
            window.location.href = 'index5.html?customerIDURL=' + customerIDURL;
        }

    });

};

function viewPolicy() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');

    window.location.href = 'index6.html?customerIDURL=' + customerIDURL;
}

const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function () {
        // Clear the current session information
        localStorage.removeItem('currentSession');
        window.location.href = 'index2.html';
    });


function confirm()
{
    if(!document.getElementById('sumAssured').value)
        {
            alert("Please select all fields!");
        }
}