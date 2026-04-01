    async function getPersonagem() {
    const statusLocal = document.getElementById('status-localizacao');
    
    // --- RECURSO DE HARDWARE + GEOCODIFICAÇÃO REVERSA ---
    if (navigator.geolocation) {
        statusLocal.textContent = "Buscando sua localização...";
        
        navigator.geolocation.getCurrentPosition(async (posicao) => {
            const lat = posicao.coords.latitude;
            const lon = posicao.coords.longitude;

            try {
                const responseUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
                const res = await fetch(responseUrl);
                const data = await res.json();
                
                const localidade = data.address.city || data.address.town || data.address.suburb || "Lugar desconhecido";
                const estado = data.address.state || "";
                
                statusLocal.textContent = `Localização do fã: ${localidade} - ${estado}`;
            } catch (error) {
                statusLocal.textContent = `Localização (Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)})`;
            }
        }, () => {
            statusLocal.textContent = "Acesso à localização negado.";
        });
    }
    // ---------------------------------------------------
   try {
        const response = await fetch("https://api.disneyapi.dev/character");
        const dados = await response.json();
        const listaPersonagens = dados.data;
        const indiceSorteado = Math.floor(Math.random() * listaPersonagens.length);
        const personagem = listaPersonagens[indiceSorteado];

        document.getElementById("nome").innerText = personagem.name;
        document.getElementById("foto").src = personagem.imageUrl || "https://via.placeholder.com/300";
        
        const fotoElement = document.getElementById("foto");
        fotoElement.alt = personagem.imageUrl ? `Foto do personagem ${personagem.name}` : "Imagem não disponível";
        
        const filme = (personagem.films && personagem.films.length > 0) ? personagem.films[0] : "Informação não disponível";
        document.getElementById("filme").innerText = "Filme: " + filme;

        setTimeout(() => {
            const infoNome = document.getElementById("info-nome");
            if (infoNome) infoNome.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100); 

    } catch (erro) {
        console.error("Erro:", erro);
    }
}