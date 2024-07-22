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

    console.log(customerIDURL);
    const userPolicyData = JSON.parse(localStorage.getItem(customerIDURL));
    const userPolicyDataLength = userPolicyData.length - 1;
    console.log(userPolicyDataLength);

    const userPolicy = userPolicyData[userPolicyDataLength];

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function () {
        // Clear the current session information
        localStorage.removeItem('currentSession');
        window.location.href = 'login.html';
    });

    if (userPolicy) {
        document.getElementById('pType').textContent = userPolicy.choosePolicy;
        document.getElementById('pName').textContent = userPolicy.policyTitle;
        document.getElementById('sAssured').textContent = userPolicy.sumAssured;
        document.getElementById('pAmount').textContent = userPolicy.premiumAmount;
        document.getElementById('pTerm').textContent = userPolicy.policyTerm;
    }
}

function selectAnother() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');
    window.location.href = 'index4.html?customerIDURL=' + customerIDURL;
}

function goHome() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');
    window.location.href = 'index3.html?customerIDURL=' + customerIDURL;
}

const toHome = document.getElementById('toHome');
toHome.addEventListener('click', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');
    window.location.href = "index3.html?customerIDURL=" + customerIDURL;
});
