import {Link} from "react-router";

import styles from  './index.module.css';

function Home() {
 
  return (
    <>
    <div className ={styles.container}>
        <div className={styles.containerLista}>
          <h1>Exemplos</h1>
          <Link to="/exemplo/01">Exemplo 1</Link>
          <Link to="/exemplo/02">Exemplo 2</Link>
          <Link to="/exemplo/03">Exemplo 3</Link>
        </div>

        <div className={styles.containerLista}>
          <h1>Atividades</h1>
          <Link to="/atividade/01">Atividade 1</Link>
        </div>
    </div>
    </>
  )
}

export default Home