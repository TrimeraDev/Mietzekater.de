document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleSubmit);
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form elements
    const form = event.target;
    const emailInput = form.querySelector('#email');
    const betaTesterCheckbox = form.querySelector('#beta-tester');
    const newsletterCheckbox = form.querySelector('#newsletter');

    // Collect form data
    const formData = {
        email: emailInput.value,
        betaTester: betaTesterCheckbox.checked,
        newsletter: newsletterCheckbox.checked
    };

    // Basic client-side validation
    if (!emailInput.checkValidity()) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }

    // Here you would typically send the data to a backend service
    // For now, just log to console and show a success message
    console.log('Form submitted:', formData);
    alert('Vielen Dank! Wir werden Sie informieren.');

    // Optional: Reset the form
    form.reset();
}
