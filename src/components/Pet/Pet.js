import './Pet.css';

const Pet = ({pet}) => {

    return(
        <li className="item-lista">
            <img src={pet.foto} alt={pet.nome} />
            <h4>{pet.nome}</h4>
            <p>{pet.historia}</p>
          </li>
    )
}

export default Pet;