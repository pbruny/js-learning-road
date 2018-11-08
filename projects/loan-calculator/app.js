document.querySelector('#loan-form').addEventListener('submit', (e) => {
    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loading').style.display = 'block'
    setTimeout(calculateResults, 1500)
    e.preventDefault();
})

function calculateResults(){
    
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly')
    const totalPayment = document.querySelector('#total')
    const totalInterest = document.querySelector('#total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    const tax = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * tax * calculatedInterest)/(tax-1)

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.querySelector('#results').style.display = 'block'
        document.querySelector('#loading').style.display = 'none'
    }else{
        showError('Please, check your numbers down below')
        document.querySelector('#results').style.display = 'none'
        document.querySelector('#loading').style.display = 'none'
    }
}

function showError(error){
    const errorDiv = document.createElement('div')
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    errorDiv.className = 'alert alert-danger'

    errorDiv.appendChild(document.createTextNode(error))
    card.insertBefore(errorDiv, heading)
    setTimeout(clearError, 3000)
}

function clearError(){
    document.querySelector('.alert').remove()
}