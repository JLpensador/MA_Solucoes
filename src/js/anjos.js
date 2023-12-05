function adicionarEventos() {
    const diasDoMes = document.querySelectorAll('.day:not(.header)');
    
   }

  adicionarEventos();

const diaAtual = new Date().getDate();

diasDoMes[diaAtual - 1].classList.add('today');
