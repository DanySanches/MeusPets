import './Hello.css'

  function Hello({nome = 'usuário', sobrenome}){
    return(
      <h2 className='title'>Olá, {nome} {sobrenome}!</h2>
    )
  }

  export default Hello;