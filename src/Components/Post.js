export default function Post( props ){
    return (
      <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.image} alt={props.user}/>
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" src={props.imagePost} alt=""/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeImage} alt=""/>
          <div className="texto">
            Curtido por <strong>{props.likeName}</strong> e <strong data-test="likes-number" >outras {props.likes}</strong>
          </div>
        </div>
      </div>
      </div>
    );
}