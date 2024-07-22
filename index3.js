window.onload = function()
{
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('customerIDURL');

    console.log(customerIDURL);

    const userData =  JSON.parse(localStorage.getItem('users'));
    console.log(userData);
    const user = userData.find(user => user.customerId === customerIDURL);

    console.log(user);
    if(user)
    {
        document.getElementById('cusNameSpan').textContent = user.name;
        document.getElementById('cusIdSpan').textContent = user.customerId;
    }

    const choosePolicy = document.getElementById('choosePolicy');
    choosePolicy.addEventListener('click', function(){
        window.location.href = 'index4.html?customerIDURL=' + customerIDURL;
    });

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        // Clear the current session information
        localStorage.removeItem('currentSession');
        window.location.href = 'index2.html';
    });

};

function viewPolicy()
    {    
        const urlParams = new URLSearchParams(window.location.search);
        const customerIDURL = urlParams.get('customerIDURL');
        window.location.href = 'index6.html?customerIDURL='+customerIDURL;
    }