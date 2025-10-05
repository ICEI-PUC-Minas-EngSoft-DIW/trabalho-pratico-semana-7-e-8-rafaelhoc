// Estrutura JSON com os projetos da EcoVida
const dados = [
  {
    "id": 1,
    "titulo": "Reflorestamento Local",
    "descricao": "Plantar árvores nativas para recuperar áreas degradadas e aumentar a biodiversidade da região.",
    "imagem": "https://www.branco.com.br/content/dam/Branco/Latin%20America/Portuguese-BR/Images/newsroom/Reflorestramento%20-%2003.jpg",
    "conteudo": "O projeto de Reflorestamento Local tem como objetivo restaurar áreas degradadas por meio do plantio de espécies nativas, contribuindo para o aumento da biodiversidade e a melhoria da qualidade do solo.",
    "objetivos": "Restaurar áreas degradadas, envolver a comunidade local e aumentar a biodiversidade.",
    "resultados": "Mais de 500 árvores plantadas, 3 hectares recuperados e participação de 200 voluntários.",
    "local": "Belo Horizonte - MG",
    "parceiros": "Escolas locais, ONGs ambientais e empresas patrocinadoras",
    "datas": "Início: 01/01/2025 | Término: 31/12/2025"
  },
  {
    "id": 2,
    "titulo": "Educação Ambiental",
    "descricao": "Oficinas e palestras em escolas para promover hábitos sustentáveis entre crianças e jovens.",
    "imagem": "https://www.infoescola.com/wp-content/uploads/2019/09/educacao-ambiental-639310237.jpg",
    "conteudo": "O projeto busca formar cidadãos conscientes por meio de palestras, oficinas e campanhas educativas em escolas públicas.",
    "objetivos": "Promover hábitos sustentáveis e conscientização ambiental.",
    "resultados": "Mais de 500 alunos impactados e 20 escolas atendidas.",
    "local": "Belo Horizonte - MG",
    "parceiros": "Secretaria de Educação, ONGs ambientais",
    "datas": "Início: 01/02/2025 | Término: 31/10/2025"
  },
  {
    "id": 3,
    "titulo": "Proteção da Fauna Silvestre",
    "descricao": "Monitoramento e proteção de espécies nativas ameaçadas, com ações para preservar seus habitats naturais.",
    "imagem": "https://correiopiauiense.com.br/media/image_bank/2025/3/thumbs/programa-de-protecao-a-fauna-silvestre-e-criado-no-piaui.jpg.1200x0_q95_crop.jpeg",
    "conteudo": "O projeto realiza o monitoramento de espécies em risco e ações de preservação de habitats naturais.",
    "objetivos": "Proteger espécies ameaçadas e preservar seus habitats.",
    "resultados": "Espécies monitoradas: 15 | Áreas protegidas: 10 hectares",
    "local": "Parques e reservas naturais da região",
    "parceiros": "Institutos de Pesquisa, ONGs e voluntários",
    "datas": "Início: 01/03/2025 | Término: 31/12/2025"
  }
];

// Home-page: Montagem dos cards
function carregarProjetos() {
  const container = document.getElementById("container-projetos");

  dados.forEach(projeto => {
    const cardHTML = `
      <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div class="card w-100 shadow border-0">
          <img src="${projeto.imagem}" class="card-img-top projeto-img" alt="${projeto.titulo}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-success">${projeto.titulo}</h5>
            <p class="card-text flex-grow-1">${projeto.descricao}</p>
            <a href="detalhes.html?id=${projeto.id}" class="btn btn-success mt-2 align-self-start">Ver mais</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Executa se estiver na home
if (document.body.id === "home") {
  carregarProjetos();
}