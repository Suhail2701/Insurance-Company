window.onload = function () {
    const URLParams = new URLSearchParams(window.location.search);
    const customerIDURL = URLParams.get('customerIDURL');

    const userData = JSON.parse(localStorage.getItem('users'));
    const user = userData.find(user => user.customerId === customerIDURL);

    if (user) {
        document.getElementById('cusNameSpan').textContent = user.name;
        document.getElementById('cusIdSpan').textContent = user.customerId;
    }

    const userPolicyData = JSON.parse(localStorage.getItem(customerIDURL));
    const policyTable = document.getElementById('policyTable');
    const paginationDiv = document.getElementById('pagination');

    const rowsPerPage = 5;
    let currentPage = 1;

    function displayPolicies(currentPage) {
        policyTable.innerHTML = `
            <tr>
                <th>Policy No.</th>
                <th>Commence Date</th>
                <th>Status</th>
                <th>Type</th>
                <th>Policy Title</th>
                <th>Premium Amount</th>
                <th>Next Due Date</th>
                <th>Sum Assured</th>
                <th>Nominee reg?(Yes/No)</th>
            </tr>
        `;

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedItems = userPolicyData.slice(start, end);

        paginatedItems.forEach(element => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${element.policyNumber}</td>
                <td>${element.startDate}</td>
                <td>${element.status}</td>
                <td>${element.choosePolicy}</td>
                <td>${element.policyTitle}</td>
                <td>${element.premiumAmount}</td>
                <td>${element.nextDue}</td>
                <td>${element.sumAssured}</td>
                <td>${element.nomineeReg}</td>
            `;
            policyTable.appendChild(row);
        });

        displayPagination();
    }

    function displayPagination() {
        paginationDiv.innerHTML = '';

        const totalPages = Math.ceil(userPolicyData.length / rowsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            let pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.disabled = true;
            }
            pageButton.addEventListener('click', function () {
                currentPage = i;
                displayPolicies(currentPage);
            });
            paginationDiv.appendChild(pageButton);
        }
    }

    displayPolicies(currentPage);

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function () {
        // Clear the current session information
        localStorage.removeItem('currentSession');
        window.location.href = 'index2.html';
    });
}
