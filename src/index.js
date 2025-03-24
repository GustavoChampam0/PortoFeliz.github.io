// Dados estáticos dos pontos turísticos de Porto Feliz
const pontosTuristicos = {
   parqueMoncoes: {
      name: "Parque das Monções",
      description: "Um lugar especial às margens do Rio Tietê, onde os bandeirantes partiam em suas expedições. Adoramos passear aqui e sentir a história viva, com o som do rio e a vista do Paredão Salitroso.",
      location: "Rua dos Bandeirantes, s/n, Porto Feliz - SP",
      image: "./img/parquemonçoes.jpg"
   },
   igrejaMatriz: {
      name: "Igreja Matriz Nossa Senhora Mãe dos Homens",
      description: "Construída em 1750, essa igreja em estilo barroco é um tesouro de Porto Feliz. Os azulejos pintados por Bruno de Giusti contam histórias da cidade que nos emocionam toda vez que visitamos.",
      location: "Praça Dr. José Sacramento e Silva, Centro, Porto Feliz - SP",
      image: "./img/igreja.jpg"
   },
   engenhoCentral: {
      name: "Engenho Central",
      description: "Inaugurado em 1878, foi o primeiro engenho de açúcar de São Paulo. Sempre que passamos por aqui, imaginamos como era a vida naquela época – um pedaço da nossa história!",
      location: "Rua Engenho Central, Porto Feliz - SP",
      image: "./img/engenho.jpg"
   },
   grutaLourdes: {
      name: "Gruta de Nossa Senhora de Lourdes",
      description: "Dentro do Parque das Monções, essa gruta é um cantinho de paz e fé. A vista do Rio Tietê daqui é incrível, e sempre nos traz uma sensação de calma e conexão com a natureza.",
      location: "Parque das Monções, Porto Feliz - SP",
      image: "./img/gruta.jpg"
   },
   museuMoncoes: {
      name: "Museu das Monções",
      description: "Localizado no centro histórico, este museu guarda mapas, documentos e objetos das expedições monçoeiras. Uma visita que nos faz viajar no tempo e entender o passado de Porto Feliz.",
      location: "Praça Duque de Caxias, 66, Centro, Porto Feliz - SP",
      image: "./img/monçõesmuseu.jpg"
   },
   pracaMatriz: {
      name: "Praça da Matriz",
      description: "Ao redor da Igreja Matriz, essa praça é o coração de Porto Feliz. Com árvores centenárias e bancos para descansar, é o lugar perfeito para sentir o clima da cidade.",
      location: "Praça Dr. José Sacramento e Silva, Centro, Porto Feliz - SP",
      image: "./img/praça.jpg"
   },
   monumentoBandeirantes: {
      name: "Monumento aos Bandeirantes",
      description: "No Parque das Monções, essa escultura homenageia os bandeirantes que desbravaram o interior do Brasil. Um ponto que nos conecta às raízes aventureiras de Porto Feliz.",
      location: "Parque das Monções, Porto Feliz - SP",
      image: "./img/MONUMENTO.jpg"
   },
   estacaoCultural: {
      name: "Estação Cultural",
      description: "A antiga estação ferroviária virou um espaço cultural cheio de vida, com exposições e eventos que celebram a cultura local. Um lugar que respira história e criatividade.",
      location: "Rua Tenente Gelás, Centro, Porto Feliz - SP",
      image: "./img/estacao.jpg"
   },
   ponteMetalica: {
      name: "Ponte Metálica",
      description: "Construída no início do século XX sobre o Rio Tietê, essa ponte é um marco da engenharia antiga. Passar por aqui é como voltar no tempo!",
      location: "Acesso pelo Parque das Monções, Porto Feliz - SP",
      image: "./img/ponte.jpg"
   },
   fazendaBoaVista: {
      name: "Fazenda Boa Vista",
      description: "Uma fazenda histórica do ciclo do café, com arquitetura preservada e um ar de nostalgia. Nos faz imaginar a vida rural de antigamente em Porto Feliz.",
      location: "Zona rural, Porto Feliz - SP",
      image: "./img/fazenda.jpg"
   }
};

// Função para abrir o modal de detalhes
function openDetails(pontoId) {
   const ponto = pontosTuristicos[pontoId];
   if (!ponto) {
      console.error("Ponto turístico não encontrado:", pontoId);
      return;
   }

   // Preencher os detalhes no modal
   document.getElementById('detailName').textContent = ponto.name;
   document.getElementById('detailDescription').textContent = ponto.description;
   document.getElementById('detailLocation').textContent = ponto.location;

   // Abrir o modal
   openModal('detailsModal');
}

// Função para abrir um modal genérico
function openModal(modalId) {
   const modal = document.getElementById(modalId);
   if (modal) {
      modal.style.display = 'block';
   }
}

// Função para fechar um modal genérico
function closeModal(modalId) {
   const modal = document.getElementById(modalId);
   if (modal) {
      modal.style.display = 'none';
   }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
   if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
   }
};