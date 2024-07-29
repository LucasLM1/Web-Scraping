# Web Scraper

## Descrição
Este projeto realiza web scraping para capturar links, imagens, título e meta descrição de uma página web fornecida.

<details>
  <summary> Estrutura do Projeto 🚧 </summary>
  
  - `src/`: Contém o código fonte do projeto.
    
  - `index.js`: Servidor Express que define a rota para scraping.
   
  - `scraper.js`: Função que realiza o web scraping utilizando Puppeteer.
   
  - `package.json`: Gerenciador de dependências.
    
  - `README.md`: Documentação do projeto.
</details>

<br/>

<details>
  <summary> Requisitos 🚧 </summary>
  
  - Node.js  `20.5.0`
  
  - NPM  `10.8.2`
</details>

<br/>

<details>
  <summary> Instalação do Projeto Local via Git Bash✔️ </summary>
  
  - Para sua instalação é necessário ter o GitBash instalado e configurado em sua máquina. <br />
    
  - Logo após isto, basta copiar este código `https://github.com/LucasLM1/Web-Scraping.git` <br />
    
  - Abra o GitBash em sua máquina em alguma pasta e/ou workspace desejada e dar o comando. <br />
    
  - Com o botão direito no GitBash escreva o seguinte comando `git clone` e após isto aperte novamente o botão direito e selecione `Paste` para colar o link do repositório. <br />
    
  - Aperte `Enter` e espere a clonagem ser realizada. <br />
</details>

<br/>

<details>
    <summary> Instalação do Projeto Local por Arquivo .zip 🗂️ </summary>
  
  - Para transferir o projeto que está no GitHub para a sua máquina, basta clicar em: <a href="https://github.com/LucasLM1/Web-Scraping/archive/refs/heads/main.zip"> 
    Baixar arquivo compactado do projeto.
    </a>
</details>

<br/>

<details>
    <summary> Instruções para rodar o projeto localmente 💻 </summary>
  
  1. Execute `node src/index.js`
      
  3. Acesse `http://localhost:3000/Web-scraper?url=<URL_ALVO>`
     
  4. Caso queira visualizar melhor os dados retornados através do JSON, existe uma extensão que possibilita isso, ela se chama <a href="https://chromewebstore.google.com/detail/gbmdgpbipfallnflgajpaliibnhdgobh"> JSON Viewer </a>.
     
  5. Substitua `<URL_ALVO>` pela URL que deseja capturar os dados.
</details>

<br/>

<details>
    <summary> Sobre o Puppeteer e sua instalação... </summary>
  
  - Para instalá-lo basta digitar o comando `npm install express puppeteer` no terminal.
    
  - O Puppeteer é uma biblioteca Node.js que fornece uma API de alto nível para controlar navegadores Chrome ou Chormium, ele é mantido pela própria equipe do Google Chrome e é amplamente utilizado para automatizar tarefas no navegador, como testes de interface de usuário, web scraping, captura de telas, geração de PDFs e muito mais.
</details>
