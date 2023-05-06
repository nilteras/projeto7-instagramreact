export default function User() {
    return (
        <div className="usuario">
          <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
          <div data-test="name" className="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon data-test="edit-name" name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}