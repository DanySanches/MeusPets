import nina from "../Assets/nina.jpg";
import nino from "../Assets/nino.jpg";
import pipoca from "../Assets/Pipoca.jpg";
import pandora from "../Assets/Pandora.jpg";
import pacoca from "../Assets/pacoca.jpg";
import tigrinho from "../Assets/Tigrinho.jpg";
import vitoria from "../Assets/Vitoria.jpg";
import mel from "../Assets/mel2.jpg";
import "./Pets.css";
import Pet from "../Pet/Pet";

const pets = [
  {
    nome: "Nina",
    foto: nina,
    historia:
      "A Nina apareceu no dia 12 de outubro de 2017,foi minha primeira gata,eu mal imaginava que ela tinha uma supresa para mim...Ela é minha gata Kinder ovo. Sua personalidade é um pouco rabugenta, mas muito protetora, qualquer lugar em que eu dormir ela está sempre velando meu sono na minha cabeça.",
  },

  {
    nome: "Nino",
    foto: nino,
    historia:
      "No dia 13 de dezembro de 2017 a Nina me deu de presente... O Nino foi o maior gato da ninhada, seu nome foi primeiramente Mingau, mas quando meu sogro adotou ele, o rebatizou de Nino, quando meu sogro faleceu o Nino passou um tempo com a avó do meu esposo e em 29/11/20 ele voltou para nós, hoje é nosso pãozinho fofo....",
  },

  {
    nome: "Pipoca",
    foto: pipoca,
    historia:
      "Meu grudinho, se chama Pipoca porque ele nasceu muito muidinho e não dava pra ver o sexo, então coloquei um nome unisex,em 10 de agosto de 2018, descobrimos que ele tem algumas más formações em seu coraçãozinho, desde então fazemos tratamento para que sua preciosa vida seja a melhor o possível...hoje ele está medicado e é tão forte quanto cada um da família",
  },

  {
    nome: "Pandora",
    foto: pandora,
    historia:
      "Minha menina com o olhar mais doce do mundo, ela é o ser mais carinhoso e medroso da família, quando estou trabalhando ela gosta de  ficar perto e subindo na mesa por isso coloquei a caminha para ela do lado da minha mesa, ela é muito apegada no Tigrinho que também adora ela os dois são melhores amigos... ",
  },
  {
    nome: "Paçoca",
    foto: pacoca,
    historia:
      'Filhote mais grudado com a Nina, foi ela quem me impediu de doar qualquer outro gato, ela foi pra adoção e não se adaptou fui buscar ela na casa da "tutora" e quando cheguei em casa ela passava a patinha desperadamente no rosto da Nina e a Nina no rosto dela, ela não gosta que toquem nela, mas nós sempre temos que estar perto.',
  },
  {
    nome: "Tigrinho",
    foto: tigrinho,
    historia:
      " O Tigrinho apareceu na casa que eu morava em Guarulhos,ele é muito assustado, fui dando comida, ele foi pegando confiança quando vi que ele estava com berne, chamei a Veterinária e cuidei dele e desde então o adotei oficiamente.Ele é muito grudado comigo e quando deito ele deita no meu colo e fica passando a patinha no meu rosto.",
  },

  {
    nome: "Vitória",
    foto: vitoria,
    historia: "Ela foi adotada em 06 de Janeiro de 2021, depois de uma promessa que fiz a São Francisco de Assis, a vi em um muro cheio de caco de vidro e prometi que se ela ficasse bem eu adotaria e a chamaria de Vitória, três dias depois ela apereceu sã e salva no meu portão, quando eu vi já estava com ela dentro de casa, hoje  em  dia  mora mais com a avó por tem todas suas vontades feitas, meus pais não vivem sem ela e ela não vive sem eles.",
  },

  {
    nome: "Mel",
    foto: mel,
    historia:
      "A caçula da família, foi adotada em 20 de maio de 2023, após sofrer  abandono  de  seus antigos donos, ela é  muito linda, dócil e comportada, veio com muitos traumas da rua mas graças a Deus, já  conseguimos reverter a maioria, ela adora passear e não pode ver sua coleira que já sabe que é a hora, quando demoramos para sair ela reclama, a Vitória morre de ciúmes dela com meu pai....",
  },
];

const Pets = () => {
  return (
    <section className="pets">
      <h1> Meus Pets</h1>
      <ul className="pets-lista">
        {pets.map((pet, index) => (
          <Pet pet={pet} key="index"/>
        ))}
      </ul>
    </section>
  );
};

export default Pets;
