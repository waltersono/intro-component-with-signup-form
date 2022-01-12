'use strict';

class App {

    _btnSubmit = document.querySelector('.form__btn');
    _inputFirstName = document.querySelector('.form__input--first-name');
    _inputLastName = document.querySelector('.form__input--last-name');
    _inputEmail = document.querySelector('.form__input--email');
    _inputPassword = document.querySelector('.form__input--password');

    constructor() {
        this._addHandlerSubmit();
    }

    _addHandlerSubmit() {

        this._btnSubmit.addEventListener('click', e => {


            if (!this._inputFirstName.checkValidity() || this._inputFirstName.value == '') {
                this._showError(this._inputFirstName);
            }

            if (!this._inputLastName.checkValidity() || this._inputLastName.value == '') {
                this._showError(this._inputLastName);
            }

            if (!this._inputEmail.checkValidity() || this._inputEmail.value == '') {
                this._showError(this._inputEmail);
            }

            if (!this._inputPassword.checkValidity() || this._inputPassword.value == '') {
                this._showError(this._inputPassword);
            }


        });
    }

    _showError(element) {
        element.parentElement.classList.add('form__input-box--error');
        element.nextElementSibling.classList.add('form__error-icon--show');
        element.parentElement.nextElementSibling.classList.add('form__input-error--show');
    }
}

new App();