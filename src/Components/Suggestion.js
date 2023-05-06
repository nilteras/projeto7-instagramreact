export default function Suggestion( props){
    return (
        <div className="sugestao">
            <div className="usuario">
              <img src={props.image} alt=""/>
              <div className="texto">
                <div className="nome">{props.user}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
          //   <div className="sugestao">
          //   <div className="usuario">
          //     <img src="" alt="bad.vibes.memes.svg"/>
          //     <div className="texto">
          //       <div className="nome"></div>
          //       <div className="razao">Segue você</div>
          //     </div>
          //   </div>

          //   <div className="seguir">Seguir</div>
          // </div>

          // <div class="sugestao">
          //   <div class="usuario">
          //     <img src="" alt="chibirdart"/>
          //     <div class="texto">
          //       <div class="nome"></div>
          //       <div class="razao">Segue você</div>
          //     </div>
          //   </div>

          //   <div class="seguir">Seguir</div>
          // </div>

          // <div class="sugestao">
          //   <div class="usuario">
          //     <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
          //     <div class="texto">
          //       <div class="nome">razoesparaacreditar</div>
          //       <div class="razao">Novo no Instagram</div>
          //     </div>
          //   </div>

          //   <div class="seguir">Seguir</div>
          // </div>

          // <div class="sugestao">
          //   <div class="usuario">
          //     <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
          //     <div class="texto">
          //       <div class="nome">adorable_animals</div>
          //       <div class="razao">Segue você</div>
          //     </div>
          //   </div>

          //   <div class="seguir">Seguir</div>
          // </div>

          // <div class="sugestao">
          //   <div class="usuario">
          //     <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
          //     <div class="texto">
          //       <div class="nome">smallcutecats</div>
          //       <div class="razao">Segue você</div>
          //     </div>
          //   </div>

          //   <div class="seguir">Seguir</div>
          // </div>
    );
}