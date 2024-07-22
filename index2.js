document.addEventListener('DOMContentLoaded', function(){

    const registrationForm = document.querySelector('#registrationForm');
    
    registrationForm.addEventListener('submit', function(e){
        e.preventDefault();

        const customerIdE = document.getElementById('CustID').value;
        const password = document.getElementById('password').value;
        const userData = JSON.parse(localStorage.getItem('users'));
        const user = userData.find(user => user.customerId === customerIdE)
        if(user)
            {  
                const custID = user.customerId;
                const password1 = user.password;
                if(password === password1)
                    {
                    window.location.href = 'index3.html?customerIDURL=' +  custID;
                    }
                else
                {
                    alert('Icorrect Password');
                }
            }
        else
        {
            console.log("User with the specified customerId not found.");
        }

        document.getElementById('CustID').value = '';
        document.getElementById('password').value = '';
        
    });
    
})