// ============================================
// CONTACT FORM VALIDATION
// ============================================

function initFormValidation() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');
    
    // ============================================
    // VALIDATION FUNCTIONS
    // ============================================
    function validateName() {
        const name = nameInput.value.trim();
        
        if (name === '') {
            showError(nameInput, nameError, 'Name is required');
            return false;
        } else if (name.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        } else {
            showSuccess(nameInput, nameError);
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, emailError, 'Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(emailInput, emailError);
            return true;
        }
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        
        if (message === '') {
            showError(messageInput, messageError, 'Message is required');
            return false;
        } else if (message.length < 10) {
            showError(messageInput, messageError, 'Message must be at least 10 characters');
            return false;
        } else {
            showSuccess(messageInput, messageError);
            return true;
        }
    }
    
    // ============================================
    // SHOW ERROR/SUCCESS
    // ============================================
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    // ============================================
    // REAL-TIME VALIDATION
    // ============================================
    if (nameInput) {
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim() !== '') {
                validateName();
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', () => {
            if (emailInput.value.trim() !== '') {
                validateEmail();
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', validateMessage);
        messageInput.addEventListener('input', () => {
            if (messageInput.value.trim() !== '') {
                validateMessage();
            }
        });
    }
    
    // ============================================
    // FORM SUBMISSION
    // ============================================
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Form is valid - show success message
                formSuccess.style.display = 'block';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    form.reset();
                    formSuccess.style.display = 'none';
                    
                    // Remove success classes
                    nameInput.classList.remove('success');
                    emailInput.classList.remove('success');
                    messageInput.classList.remove('success');
                }, 3000);
                
                // Here you would typically send the form data to a server
                console.log('Form submitted successfully!', {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                });
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormValidation);
} else {
    initFormValidation();
}
