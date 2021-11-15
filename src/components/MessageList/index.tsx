import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! 🔥🔥.</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/KevinMCruzP.png" alt="Kevin Cruz" />
            </div>
            <span>Kevin Cruz</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! 🔥🔥.</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/KevinMCruzP.png" alt="Kevin Cruz" />
            </div>
            <span>Kevin Cruz</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! 🔥🔥.</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/KevinMCruzP.png" alt="Kevin Cruz" />
            </div>
            <span>Kevin Cruz</span>
          </div>
        </li>
      </ul>
    </div>
  )
}