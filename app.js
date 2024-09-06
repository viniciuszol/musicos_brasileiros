function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa == campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Concatena HTML para criar um novo elemento de resultado
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais Informações</a>
              <a href="${dado.redes}" target="blank"><p>Redes Sociais</p></a>
            </div>
          `;
        }
    }
  
    //se buscarem algo que não esteja inlcudes
    if(!resultados) {
        section.innerHTML = "Nada foi encontrado. Digite o nome de um músico brasileiro."
        return
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }


