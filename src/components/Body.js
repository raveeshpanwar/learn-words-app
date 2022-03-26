import Video from './Video';
import Speech from './Speech/Speech';
import styles from './body.module.css'
const body=()=>{
return <div className={styles.body}>
   <div className={styles.video}><Video/></div> 
    <Speech/>
    </div> 
}
export default body;