import "./styles.css";
import { Grid } from "@material-ui/core";
import CustomCard from "./components/CustomCard";
export default function App() {
  return (
    <div className="App">
      <Grid container spacing={5}>
        <Grid item xs>
          <CustomCard />
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
      </Grid>
    </div>
  );
}
