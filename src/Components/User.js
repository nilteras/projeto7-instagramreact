import { useState } from "react";



export default function User() {

  let [nameUser, setNome] = useState("catanacomics");
  let [imageUser, setImagem] = useState("assets/img/catanacomics.svg")

  function alterarUser (){

    let novoUser = prompt("Para qual nome deseja alterar?");
     if(novoUser != null && novoUser != undefined && novoUser != "" && novoUser != " "){
      setNome(novoUser);
     } else {
      alert("Campo vazio ou inválido, tente novamente!");
     }
  }

  function alteraImageUser (){
    let novaImage = prompt("Link da nova imagem por favor: ");
    if(novaImage != null && novaImage != undefined && novaImage != "" && novaImage != " "){
      setImagem(novaImage);
     } else {
      alert("Campo vazio ou inválido, tente novamente!");
     }
  }


    return (
        <div className="usuario">
          <img data-test="profile-image" onClick={alteraImageUser} src={imageUser} alt="imagem de perfil"/>
          <div data-test="name" className="texto">
            <span>
              <strong>{nameUser}</strong>
              <ion-icon data-test="edit-name" onClick={alterarUser} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}


