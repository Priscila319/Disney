# 🏰 Disney Character Shuffler (PWA)

Um aplicativo web interativo que sorteia personagens da Disney utilizando a API oficial, desenvolvido como parte dos estudos de **Análise e Desenvolvimento de Sistemas**. O projeto foi transformado em um **PWA (Progressive Web App)** e utiliza recursos nativos de hardware.

## 🚀 Funcionalidades

* **Sorteio Aleatório:** Consome a [Disney API](https://disneyapi.dev/) para exibir fotos, nomes e filmes dos personagens.
* **PWA (Progressive Web App):** * Pode ser instalado no celular ou desktop (Add to Home Screen).
    * Funciona offline através de Service Workers.
    * Possui manifesto de ícones e cores customizadas.
* **Uso de Recurso de Hardware (Geolocalização):** * Ao clicar no botão de sorteio, o app acessa o sensor de GPS do dispositivo.
    * **Geocodificação Reversa:** Converte as coordenadas de hardware (Latitude/Longitude) em nomes reais de cidades e estados usando a API do OpenStreetMap (Nominatim).

## 🛠️ Tecnologias Utilizadas

* **HTML5 & CSS3:** Estrutura e estilização responsiva.
* **JavaScript (ES6+):** Lógica de sorteio, consumo de API assíncrona (`async/await`) e manipulação de DOM.
* **Service Workers:** Para suporte offline e cache.
* **Web App Manifest:** Para transformá-lo em uma aplicação instalável.

## 📱 Como instalar o PWA

1.  Acesse o link do projeto pelo navegador do seu celular.
2.  Clique no ícone de compartilhamento ou nos três pontos do navegador.
3.  Selecione **"Adicionar à tela de início"** ou **"Instalar aplicativo"**.
4.  O ícone da Disney aparecerá na sua lista de apps!

## 🔧 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone [https://github.com/Priscila319/Disney.git](https://github.com/Priscila319/Disney.git)

# Acesse a pasta
cd Disney

# Abra o arquivo index.html no seu navegador ou use a extensão Live Server no VS Code.
