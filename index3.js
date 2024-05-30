window.onload = function()
{
    const urlParams = new URLSearchParams(window.location.search);
    const customerIDURL = urlParams.get('CsId');

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

};
