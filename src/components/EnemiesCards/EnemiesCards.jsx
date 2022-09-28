import './EnemiesCards.scss';
import { React, useState } from 'react';


export const EnemiesCards = () => {
  const [enemiesCardsSide, setEnemiesCardsSide] = useState(true);

  return (
    <>
    { enemiesCardsSide === true
      ?
      <div onClick={() => setEnemiesCardsSide(!enemiesCardsSide)}>
        <main>
          <div className="enemyImg"></div>
          <div className='enemyText'>
            <span>
              Nome do Bixo
            </span>
            <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </span>
          </div>
        </main>
      </div>
      :
      <h1>Nothing</h1>
    }
    </>
  )

  // if (enemiesCardsSide === true) {
  //   return (
  //     <div onClick={() => setEnemiesCardsSide(!enemiesCardsSide)}>
  //       <main>
  //         <div className="enemyImg"></div>
  //         <div className='enemyText'>
  //           <span>
  //             Nome do Bixo
  //           </span>
  //           <span>
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //           </span>
  //         </div>
  //       </main>
  //     </div>
  //   )
  // }
  
  // else {
  //   return (
  //     <div onClick={() => setEnemiesCardsSide(!enemiesCardsSide)}>
  //       <main>
  //         <div className="enemyImg2"></div>
  //       </main>
  //     </div>
  //   )
  // }
};
