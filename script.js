


async function getPersonagem() {
    try {
        
        const response = await fetch("https://api.disneyapi.dev/character");
        const dados = await response.json();
        const listaPersonagens = dados.data;

        const indiceSorteado = Math.floor(Math.random() * listaPersonagens.length);
        const personagem = listaPersonagens[indiceSorteado];

        // Atualiza o HTML com os dados do sorteado
        document.getElementById("nome").innerText = personagem.name;
        document.getElementById("foto").src = personagem.imageUrl || "https://via.placeholder.com/300";
        
        
        const fotoElement = document.getElementById("foto");
        if (personagem.imageUrl) {
            fotoElement.alt = `Foto do personagem ${personagem.name}`;
        } else {
            fotoElement.alt = "Imagem não disponível";
        }
        
        
        const filme = personagem.films.length > 0 ? personagem.films[0] : "Informação não disponível";
        document.getElementById("filme").innerText = "Filme: " + filme;

        // Rola suavemente até as informações do personagem
        setTimeout(() => {
            const infoNome = document.getElementById("info-nome");
            if (infoNome) {
                infoNome.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center'  
                });
            }
        }, 100); 

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        alert("Erro ao conectar com a API!");
    }
}

