  const input = document.querySelector('#cep');
  const span = document.querySelector('.error');

  const validator = {
    validatorSubmit: () => {
      let send = true;

      validator.clearError();

      const check = validator.checarEntradas(input);
      if (check !== true) {
        send = false;
        validator.showError(check);
      }
      return send;
    },
    checarEntradas: (input) => {
      let rules = input.getAttribute('data-rules');
      if (rules !== null) {
        rules = rules.split('|');
        for (let k in rules) {
          let rDetails = rules[k].split('=');
          switch (rDetails[0]) {
            case 'required':
              if (input.value === '') {
                return 'Campo não pode ser vazio!';
              }
              break;
            case 'min':
              if (input.value.length < rDetails[1]) {
                return `É necessário no mínimo ${rDetails[1]} caracteres`;
              }
              break;
            case 'cep':
              if (input.value !== '') {
                const regex = /[\d]{5}-[\d]{3}/g;
                if (!regex.test(input.value)) {
                  return 'Digite um CEP válido!';
                }
              }
              break;
          }
        }
      }
      return true;
    },
    showError: (error) => {
      span.classList.add('erro');
      span.innerText = error;
    },
    clearError: () => {
      span.innerText = '';
      span.classList.remove('erro');
    }
  };