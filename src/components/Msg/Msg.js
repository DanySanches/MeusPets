import './Msg.css'

function Msg({children, cor}){
    return(
      <div className="mensagem">
        <p style={{color:cor}}>{children}</p>
      </div>
    )
  }

  export default Msg;