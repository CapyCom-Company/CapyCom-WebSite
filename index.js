const pages = {
    Home: "Home",
    ProdutosServicos: "Produtos e Serviços",
    Projetos: "Projetos",
    Sobre: "Sobre"
};

const setHome = () => {
    pages.Home = `
    <link rel="stylesheet" href="./css/Home.css">

    <section>
    <h1 class="anim2">Capcom Company</h1>
    </section>
    <section>

    <img class="HomeLogo" src="https://media.discordapp.net/attachments/982286573691342878/1220131705004884099/19444e609bb682cf82374db7c80753df-Photoroom.png-Photoroom.png?ex=660dd333&is=65fb5e33&hm=8e9154e8b091b5fc12e6afca329cec399389a3fe67524c00d6159653faf5b8c2&=&format=webp&quality=lossless&width=701&height=701" alt="logo"/>


    </section>
    `
}

const setProdutosEServicos = () => {
    pages.ProdutosServicos = `
    <link rel="stylesheet" href="./css/Produtos&Servicos.css">

    <h1 class="anim">Produtos & Servicos</h1>
    
    <div class="box">
        <div class="anim">
            <h4>Bot Discord</h4>
            <p>Adcione o Capycom BOT em seu servidor:</p>
            <a href="https://discord.com/oauth2/authorize?client_id=766369420423462974&permissions=8&scope=bot%20applications.commands">Adcionar</a>
        </div>
        <div class="anim">
            <h4>Produto 2</h4>
            <p>Lorem ipsum Lorem</p>
        </div>
        <div class="anim">
            <h4>Produto 3</h4>
            <p>Lorem ipsum Lorem</p>
        </div>
    </div>
    
    `
}

const setProgetos = () => {
    pages.Projetos = `
    <link rel="stylesheet" href="./css/Projetos.css">

    <h1 class="anim2">Projetos</h1>
    <div class="container anim2">
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1"
            tabindex="0"
            class="carousel__slide">
          <div class="carousel__snapper">
            <a href="#carousel__slide4"
               class="carousel__prev">Go to last slide</a>
            <a href="#carousel__slide2"
               class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide2"
            tabindex="0"
            class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide1"
             class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide3"
             class="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide3"
            tabindex="0"
            class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide2"
             class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide4"
             class="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide4"
            tabindex="0"
            class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide3"
             class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide1"
             class="carousel__next">Go to first slide</a>
        </li>
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1"
               class="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2"
               class="carousel__navigation-button">Go to slide 2</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3"
               class="carousel__navigation-button">Go to slide 3</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4"
               class="carousel__navigation-button">Go to slide 4</a>
          </li>
        </ol>
      </aside>
    </section>
    </div>
    `
}


const setSobre = () => {
    pages.Sobre = `
    
    <link rel="stylesheet" href="./css/Sobre.css">
    <div class="container">
    <div class="equipe">
    <h1 class="anim2">Equipe</h1>
    <ul>
    <li class="anim2 persons">
    <img src="https://media.discordapp.net/attachments/982286573691342878/1220147174042505277/profile-pic_1.png?ex=660de19b&is=65fb6c9b&hm=cf66ef0e5423d02d0985e5b83acb073db3df4c8c4d2423394842a775281c2254&=&format=webp&quality=lossless&width=350&height=350"/>
    <div>
    <h3>Gustavo Santos</h3>
    <p>Desenvolvedor</p>
    </li>
    <li class="anim2 persons">
    <img src="https://avatars.githubusercontent.com/u/134342725?v=4"/>
    <div>
    <h3>Pedro Vinicius</h3>
    <p>Desenvolvedor</p>
    </li>
    <li class="anim2 persons">
    <img src="https://scontent-gig4-1.cdninstagram.com/v/t51.2885-19/369577722_692182632728980_4066983183971737253_n.jpg?stp=dst-jpg_s80x80&_nc_cat=110&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=g2lFSaHiagIAX-JdfYZ&_nc_ht=scontent-gig4-1.cdninstagram.com&oh=00_AfCt9jofrjAtaZr4ohQvq8zTtJB6BODlHWZuEGsPsdutvg&oe=66022A94"/>
    <div>
    <h3>Gustavo Heaberlim</h3>
    <p>Designer</p>
    </div>
    </li>
    </ul>
    </div>
    <div class="card anim2">
    <h2>Nossas Redes:</h2>
    </div>
    </div>

    `
}
    setHome()
    setProdutosEServicos()
    setProgetos()
    setSobre()


// let url_atual = window.location.href;

const urlPadrao = "file:///C:/Users/Gustavo/Desktop/Estudos%20Programa%C3%A7%C3%A3o/HTML-CSS/DEVELOPER%20FRONT-END/Index.html"

function loaded(ev) {
    Object.entries(pages).forEach(([key, value], index) => {
        document.getElementById("nav").innerHTML += `<a class="anim2" href='?page=${key}'>${key}</a>`;
    });
    document.getElementById("nav").innerHTML += `
    <button class="btn anim2" onClick="contateNos()">Contate-nos</button>
    `;
    getPageContent()
    //console.log(url_atual);
}

function getPageContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") || "Home";

    if (!pages.hasOwnProperty(page)) {
        return pages["Home"];
    }

    document.getElementById("main").innerHTML = pages[page];
}

function contateNos(ev){
  window.location.href = "https://discord.gg/cXNZEKn3FH"
}