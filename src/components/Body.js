import Video from "./Video";
import Speech from "./Speech/Speech";
import styles from "./body.module.css";
import { Grid } from "@mui/material";
const body = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11} lg={6} md={6}>
        <div className={styles.video}>
          <Video />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <div className={styles.speech}>
          <Speech />
        </div>
      </Grid>
    </Grid>
  );
};
export default body;
