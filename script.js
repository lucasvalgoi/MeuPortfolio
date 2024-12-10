document.addEventListener("DOMContentLoaded", function() {
    const userName = "lucasvalgoi"
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById('lista-projetos')

        data.forEach(repo => {
            const divProjeto = document.createElement('div')

            divProjeto.classList.add('project-item')
            divProjeto.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sem descrição"}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
            `
            lista.append(divProjeto)
        });

    })
    .catch(error => console.error('Erro ao carregar informações do repositório!', error))
})