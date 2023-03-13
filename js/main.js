const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const showSignup = document.querySelector('#show-signup');
const showLogin = document.querySelector('#show-login');

showSignup.addEventListener('click', () => {
    loginForm.classList.add('hide');
    signupForm.classList.remove('hide');
});

showLogin.addEventListener('click', () => {
    signupForm.classList.add('hide');
    loginForm.classList.remove('hide');
});

const forgotPasswordLink = document.querySelector("#forgotPasswordLink");
const modal = document.createElement("div");
modal.classList.add("container");

forgotPasswordLink.addEventListener("click", function () {
    document.querySelector(".container").classList.add('hide');
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    const modalBody = document.createElement("div");
    modalBody.innerHTML = `
    <h2>Password recovery</h2>
    <div class="form-group">
      <label for="email">email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter your email here" required>
    </div>
    <input type="submit" class="btn btn-primary" value="submit">
  `;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal)

    closeButton.addEventListener("click", function () {
        modalContent.remove();
        modal.remove();
        document.querySelector(".container").classList.remove('hide')

    });
});

const passwordInput1 = document.getElementById('password1');
const toggleButton1 = document.getElementById('toggle-password1');
const passwordInput2 = document.getElementById('password2');
const toggleButton2 = document.getElementById('toggle-password2');
const passwordInput3 = document.getElementById('password3');
const toggleButton3 = document.getElementById('toggle-password3');

toggleButton1.addEventListener('click', function () {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        toggleButton1.classList.remove("fa-eye-slash")
        toggleButton1.classList.add("fa-eye");
        toggleButton1.style.color = "red";;
    } else {
        passwordInput1.type = 'password';
        toggleButton1.classList.remove("fa-eye");
        toggleButton1.classList.add("fa-eye-slash");
        toggleButton1.style.color = "#4CAF50";
    }
});

toggleButton2.addEventListener('click', function () {
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text';
        toggleButton2.classList.remove("fa-eye-slash")
        toggleButton2.classList.add("fa-eye");
        toggleButton2.style.color = "red";;
    } else {
        passwordInput2.type = 'password';
        toggleButton2.classList.remove("fa-eye")
        toggleButton2.classList.add("fa-eye-slash");
        toggleButton2.style.color = "#4CAF50";;
    }
});

toggleButton3.addEventListener('click', function () {
    if (passwordInput3.type === 'password') {
        passwordInput3.type = 'text';
        toggleButton3.classList.remove("fa-eye-slash")
        toggleButton3.classList.add("fa-eye");
        toggleButton3.style.color = "red";
    } else {
        passwordInput3.type = 'password';
        toggleButton3.classList.remove("fa-eye")
        toggleButton3.classList.add("fa-eye-slash");
        toggleButton3.style.color = "#4CAF50";
    }
});
