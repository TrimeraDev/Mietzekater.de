var submitted = false;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const iframe = document.getElementById('hidden_iframe');
    const successMessage = document.getElementById('success-message');
    
    if (form && iframe) {
        iframe.addEventListener('load', function() {
            if(submitted) {
                form.reset();
                
                // Show success message
                successMessage.style.display = 'block';
                successMessage.classList.add('show');
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide message after 5 seconds
                setTimeout(function() {
                    const bsAlert = new bootstrap.Alert(successMessage);
                    bsAlert.close();
                }, 5000);
                
                submitted = false;
            }
        });
    }
    
    // Handle alert close button
    const closeButtons = document.querySelectorAll('.alert .btn-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const alert = this.closest('.alert');
            alert.style.display = 'none';
        });
    });
});
