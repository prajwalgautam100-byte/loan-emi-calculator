document.getElementById('calculate-btn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12; // Monthly rate
    const tenure = parseInt(document.getElementById('tenure').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(tenure) || loanAmount <= 0 || interestRate <= 0 || tenure <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    // EMI formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('monthly-emi').textContent = '₹' + emi.toFixed(2);
    document.getElementById('total-interest').textContent = '₹' + totalInterest.toFixed(2);
    document.getElementById('total-payment').textContent = '₹' + totalPayment.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});