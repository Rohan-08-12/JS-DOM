document.addEventListener("DOMContentLoaded", function () {
    // Form Submission for User Info
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function () {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let email = document.getElementById("email").value;
            let address = document.getElementById("address").value;
            let city = document.getElementById("city").value;
            let province = document.getElementById("province").value;

            let membership = document.querySelector('input[name="membership"]:checked').value;

            let output = `
                <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
                <p><strong>Membership:</strong> ${membership}</p>
            `;

            document.getElementById("output").innerHTML = output;
        });
    }

    // Form Submission for Excel Functions
    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", function () {
            let numberStr = document.getElementById("numbers").value;
            if (!numberStr) {
                alert("Please enter numbers separated by spaces.");
                return;
            }

            let numbers = numberStr.split(" ").map(Number).filter(n => !isNaN(n));
            if (numbers.length === 0) {
                alert("Please enter valid numeric values.");
                return;
            }

            let selectedOp = document.querySelector('input[name="operation"]:checked').value;
            let result;

            switch (selectedOp) {
                case "sum":
                    result = numbers.reduce((a, b) => a + b, 0);
                    break;
                case "average":
                    result = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
                    break;
                case "max":
                    result = Math.max(...numbers);
                    break;
                case "min":
                    result = Math.min(...numbers);
                    break;
            }

            document.getElementById("result").innerHTML = `<p><strong>Result:</strong> ${result}</p>`;
        });
    }
});
