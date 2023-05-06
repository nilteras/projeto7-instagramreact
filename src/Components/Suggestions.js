import Suggestion from './Suggestion'

export default function Suggestions(){
    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          
        </div>
    );
}