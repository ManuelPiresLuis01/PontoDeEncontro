import "./Botao.css"

function BotaoSubmit(p){
return(
   <button type="submit" className="btnSubmit" disabled={p.disable}>{p.value}</button>
)
}

export {BotaoSubmit}