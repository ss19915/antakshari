import Heart from './Heart';
import Grid from '@material-ui/core/grid';


const LifeCount = ({ maxLife = 0, availableLife = 0 }) => {
    let width = 2;

    return (
        <Grid container >
            {Array.from(Array(maxLife).keys()).map((_, i) => (
                <Grid
                    key={`LifeCount_${i}`}
                    item
                    lg={width}
                    md={width}
                    sm={width}
                    xl={width}
                    xs={width}
                >
                    <Heart hidden={i >= availableLife} />
                </Grid>
            ))}
        </Grid>
    );
};

export default LifeCount;