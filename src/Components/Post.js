import { useState } from "react";



export default function Post(props) {

  const [bookmark, setBookMark] = useState('bookmark-outline');
  const [numberLikes, setNumberLikes] = useState(props.likes);
  const [likeState, setLikeState] = useState({ name: "heart-outline", class: "" });

  function isSave() {
    if (bookmark === "bookmark") {
      setBookMark("bookmark-outline");
      return;
    }
    setBookMark("bookmark");
  }

  function clickLike() {
    if (likeState.name !== "heart") {
      setLikeState({ name: "heart", class: "red-heart" });

      let newNumber = (parseInt(numberLikes.toString().replace(".", "")) + 1);
      newNumber = newNumber.toString().substring(0, 3) + "." + newNumber.toString().substring(3);

      setNumberLikes(newNumber);
    }
  }

  function toggleLike() {
    let newNumber;
    if (likeState.name === "heart") {

      setLikeState({ name: "heart-outline", class: "" });

      newNumber = (parseInt(numberLikes.toString().replace(".", "")) - 1);
      newNumber = newNumber.toString().substring(0, 3) + "." + newNumber.toString().substring(3);

      setNumberLikes(newNumber);
      return;
    } else {
      setLikeState({ name: "heart", class: "red-heart" });

      newNumber = (parseInt(numberLikes.toString().replace(".", "")) + 1);
      newNumber = newNumber.toString().substring(0, 3) + "." + newNumber.toString().substring(3);

      setNumberLikes(newNumber);
    }
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
        <img data-test="post-image" src={props.imagePost} onDoubleClick={clickLike} alt="" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={likeState.class} onClick={toggleLike} name={likeState.name}></ion-icon>
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