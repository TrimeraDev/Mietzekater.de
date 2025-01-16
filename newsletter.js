document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleSubmit);
    }
});

async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const scriptURL = form.dataset.url;

    // Disable the submit button to prevent double submission
    submitButton.disabled = true;
    submitButton.textContent = 'Wird gesendet...';

    try {
        const formData = {
            email: form.querySelector('#email').value,
            betaTester: form.querySelector('#beta-tester').checked,
            newsletter: form.querySelector('#newsletter').checked
        };

        const response = await fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(formData)
        });

        // Check if the request was successful
        if (response.ok) {
            form.reset();
            alert('Vielen Dank für deine Anmeldung!');
        } else {
            throw new Error('Netzwerk-Antwort war nicht ok');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Es gab einen Fehler bei der Anmeldung. Bitte versuche es später noch einmal.');
    } finally {
        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Benachrichtige mich beim Launch';
    }
}
