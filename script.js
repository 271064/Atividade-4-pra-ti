// Slider
const swiper = new Swiper('#banner', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


AOS.init();


fetch('URL_API_SERVICOS') 
    .then(response => response.json())
    .then(data => {
        const servicosLista = document.getElementById('servicos-lista');
        data.forEach(servico => {
            const card = document.createElement('div');
            card.innerHTML = `<h3>${servico.nome}</h3><p>${servico.descricao}</p>`;
            servicosLista.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar serviços:', error));


fetch('URL_API_TESTEMUNHOS') 
    .then(response => response.json())
    .then(data => {
        const testemunhosLista = document.getElementById('testemunhos-lista');
        data.forEach(testemunho => {
            const card = document.createElement('div');
            card.innerHTML = `<img src="${testemunho.foto}" alt="${testemunho.nome}"><p>"${testemunho.texto}"</p><span>${testemunho.nome}</span>`;
            testemunhosLista.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar testemunhos:', error));

const form = document.getElementById('contato-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('Erro ao enviar a mensagem.');
        });
});