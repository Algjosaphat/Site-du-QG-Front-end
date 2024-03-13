    // Récupération des éléments du formulaire
    // const telInput = document.getElementById('tel');
    // const emailInput = document.getElementById('email');
    // const passwordInput = document.getElementById('password');
    // const confirmPasswordInput = document.getElementById('confirmPassword');
    // const passwordError = document.getElementById('passwordError');
    // const emailError = document.getElementById('emailError');

    // Fonction de vérification des mots de passe
    // function validatePassword() {
    //     if (passwordInput.value !== confirmPasswordInput.value) {
    //         confirmPasswordInput.classList.add('is-invalid');
    //         passwordError.style.display = 'block';
    //         return false;
    //     } else {
    //         confirmPasswordInput.classList.remove('is-invalid');
    //         passwordError.style.display = 'none';
    //         return true;
    //     }
    // }

    // Fonction de vérification de l'email
    // function validateEmail() {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailPattern.test(emailInput.value)) {
    //         emailInput.classList.add('is-invalid');
    //         emailError.style.display = 'block';
    //         return false;
    //     } else {
    //         emailInput.classList.remove('is-invalid');
    //         emailError.style.display = 'none';
    //         return true;
    //     }
    // }

    // Écouteurs d'événements pour la saisie dans les champs
    // confirmPasswordInput.addEventListener('input', validatePassword);
    // emailInput.addEventListener('input', validateEmail);


{/* <script> */}
    // Récupération du formulaire
    // const form = document.querySelector('form');
    const telInput = document.getElementById('tel');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');

    // Fonction de vérification des mots de passe
    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add('is-invalid');
            passwordError.style.display = 'block';
            return false;
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
            passwordError.style.display = 'none';
            return true;
        }
    }

    // Fonction de vérification de l'email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailError.style.display = 'none';
            return true;
        }
    }
    // Fonction pour valider le formulaire
    function validateForm(event) {
        // Empêcher la soumission du formulaire par défaut
        event.preventDefault();

        // Vérification de tous les champs du formulaire
        const isPasswordValid = validatePassword();
        const isEmailValid = validateEmail();

        // Vérification finale
        if (isPasswordValid && isEmailValid) {
            // Si tout est valide, soumettre le formulaire
            form.submit();
        } else {
            // Si l'un des champs n'est pas valide, ne rien faire
            // Vous pouvez également afficher un message d'erreur ou effectuer d'autres actions nécessaires
        }
    }

    // Ajout d'un écouteur d'événements sur la soumission du formulaire
    confirmPasswordInput.addEventListener('input', validatePassword);
    emailInput.addEventListener('input', validateEmail);
    form.addEventListener('submit', validateForm);
{/* </script> */}
