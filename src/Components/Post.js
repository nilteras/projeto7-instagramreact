import { useState } from "react";



export default function Post(props) {

  const [bookmark, setBookMark] = useState('bookmark-outline');
  const [numberLikes, setNumberLikes] = useState(props.likes);
  const [likeState, setLikeState] = useState({name: "heart-outline", class: ""});

  function isSave() {
    if (bookmark === "bookmark") {
      setBookMark("bookmark-outline");
      return;
    }
    setBookMark("bookmark");
  }

  function clickLike() {
    if (likeState.name !== "heart") {
      setLikeState({ name: "heart", red: "red-heart" });
      setNumberLikes(numberLikes + 1);
    }
  }

  function toggleLike() {
    if (likeState.name === "heart") {
      setLikeState({ name: "heart-outline", red: "" })
      setNumberLikes(numberLikes - 1);
      return;
    }
    setLikeState({ name: "heart", red: "red-heart" });
    setNumberLikes(numberLikes + 1);
  }


  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.image} alt={props.user} />
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" src={props.imagePost} onClick={clickLike} alt="" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={likeState.red} onClick={toggleLike} name={likeState.name}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={isSave} name={bookmark}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeImage} alt="" />
          <div className="texto">
            Curtido por <strong>{props.likeName}</strong> e <strong data-test="likes-number" >outras {numberLikes}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}