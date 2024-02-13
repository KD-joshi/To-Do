import styles from "./title-frame.module.css";

const TitleFrame = () => {
  return (
    <main className={styles.titleFrame}>
      <div className={styles.todosList}>
        <form className={styles.subFrameA}>
          <div className={styles.privacyPolicy}>
            <b className={styles.delectusAutAutem}>
              delectus aut autem (title)
            </b>
          </div>
          <div className={styles.parentCompleted}>
            <b className={styles.laboriosamMollitiaEt}>
              laboriosam mollitia et enim quasi adipisci quia...
            </b>
          </div>
          <div className={styles.dataAccess}>
            <b className={styles.quiUllamRatione}>
              qui ullam ratione quibusdam voluptatem quia omnis
            </b>
          </div>
          <div className={styles.consentConfirmation}>
            <b className={styles.illoExpeditaConsequatur}>
              illo expedita consequatur quia in
            </b>
          </div>
          <div className={styles.optionsMenu}>
            <b className={styles.quoAdipisciEnim}>
              quo adipisci enim quam ut ab
            </b>
          </div>
          <div className={styles.persistentCookies}>
            <b className={styles.molestiaePerspiciatisIpsa}>
              molestiae perspiciatis ipsa
            </b>
          </div>
          <div className={styles.majorDataProcessing}>
            <b className={styles.illoEstRatione}>
              illo est ratione doloremque quia maiores aut
            </b>
          </div>
          <div className={styles.verificationChecks}>
            <b className={styles.veroRerumTemporibus}>
              vero rerum temporibus dolor
            </b>
          </div>
          <div className={styles.dataFrameQuasivariants}>
            <b className={styles.etDoloremqueNulla}>et doloremque nulla</b>
          </div>
          <div className={styles.frameVoluptatemQuia}>
            <b className={styles.delectusAutAutem1}>{`delectus aut autem `}</b>
          </div>
          <div className={styles.dataFrameDelectusAutem}>
            <b className={styles.delectusAutAutem2}>{`delectus aut autem `}</b>
          </div>
          <div className={styles.frameMollitiaEtEnim}>
            <b className={styles.delectusAutAutem3}>{`delectus aut autem `}</b>
          </div>
          <div className={styles.dataFrameIpsaPerspiciatis}>
            <b className={styles.delectusAutAutem4}>{`delectus aut autem `}</b>
          </div>
        </form>
      </div>
      <div className={styles.vectorArrow}>
        <div className={styles.parentFrameRoot} />
      </div>
      <img className={styles.figmaWorkspaceIcon} loading="eager" alt="" />
      <div className={styles.todosList1}>
        <div className={styles.titleQuiUllamContainer}>
          <p className={styles.titleQuiUllamRationeQuibu}>
            <b className={styles.title}>Title</b>
            <span>: qui ullam ratione quibusdam voluptatem</span>
          </p>
          <p className={styles.quiaOmnis}>quia omnis</p>
          <p className={styles.userId2}>
            <b>{`User Id: `}</b>
            <span className={styles.span}>2</span>
          </p>
        </div>
        <div className={styles.completedIconFrame}>
          <div className={styles.parentFrameDelete}>
            <button className={styles.delete}>Delete</button>
          </div>
          <div className={styles.childFrameNoID}>
            <button className={styles.completed}>Completed</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TitleFrame;
