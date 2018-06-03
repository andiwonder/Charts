import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  game__team__stats__box: {
    padding: '1em',
    marginBottom: '4.25em'
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class TeamStats extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24} style={{ marginLeft: '0px', marginTop: '2em' }}>
        <Grid item md={12} style={{ marginBottom: '2em' }}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell />
                  <CustomTableCell numeric>Field Goal</CustomTableCell>
                  <CustomTableCell numeric>2pt</CustomTableCell>
                  <CustomTableCell numeric>3pt</CustomTableCell>
                  <CustomTableCell numeric>Ft</CustomTableCell>
                  <CustomTableCell />
                  <CustomTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Attempted</CustomTableCell>
                  <CustomTableCell numeric>7603</CustomTableCell>
                  <CustomTableCell numeric>5218</CustomTableCell>
                  <CustomTableCell numeric>1845</CustomTableCell>
                  <CustomTableCell numeric>1980</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Made</CustomTableCell>
                  <CustomTableCell numeric>3365</CustomTableCell>
                  <CustomTableCell numeric>2707</CustomTableCell>
                  <CustomTableCell numeric>658</CustomTableCell>
                  <CustomTableCell numeric>1592</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Percentage</CustomTableCell>
                  <CustomTableCell numeric>47.6%</CustomTableCell>
                  <CustomTableCell numeric>51.9%</CustomTableCell>
                  <CustomTableCell numeric>35.7%</CustomTableCell>
                  <CustomTableCell numeric>80.4%</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Rank</CustomTableCell>
                  <CustomTableCell numeric>13</CustomTableCell>
                  <CustomTableCell numeric>15</CustomTableCell>
                  <CustomTableCell numeric>21</CustomTableCell>
                  <CustomTableCell numeric>24</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item md={12} style={{ marginBottom: '2em' }}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell />
                  <CustomTableCell numeric>Paint</CustomTableCell>
                  <CustomTableCell numeric>Fast Break</CustomTableCell>
                  <CustomTableCell numeric>2nd Chance</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell />
                  <CustomTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Attempted</CustomTableCell>
                  <CustomTableCell numeric>7603</CustomTableCell>
                  <CustomTableCell numeric>5218</CustomTableCell>
                  <CustomTableCell numeric>1845</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Made</CustomTableCell>
                  <CustomTableCell numeric>3365</CustomTableCell>
                  <CustomTableCell numeric>2707</CustomTableCell>
                  <CustomTableCell numeric>658</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Percentage</CustomTableCell>
                  <CustomTableCell numeric>47.6%</CustomTableCell>
                  <CustomTableCell numeric>51.9%</CustomTableCell>
                  <CustomTableCell numeric>35.7%</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell>Rank</CustomTableCell>
                  <CustomTableCell numeric>13</CustomTableCell>
                  <CustomTableCell numeric>15</CustomTableCell>
                  <CustomTableCell numeric>21</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>TeamPlay</CustomTableCell>
                  <CustomTableCell numeric>assists</CustomTableCell>
                  <CustomTableCell numeric>turnovers</CustomTableCell>
                  <CustomTableCell numeric>ratio</CustomTableCell>
                  <CustomTableCell numeric>rank</CustomTableCell>
                  <CustomTableCell />
                  <CustomTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric>1962</CustomTableCell>
                  <CustomTableCell numeric>1238</CustomTableCell>
                  <CustomTableCell numeric>1.58</CustomTableCell>
                  <CustomTableCell numeric>11th</CustomTableCell>
                  <CustomTableCell />
                  <CustomTableCell />
                </TableRow>
              </TableBody>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Rebounds</CustomTableCell>
                  <CustomTableCell numeric>Offensive</CustomTableCell>
                  <CustomTableCell numeric>Defensive</CustomTableCell>
                  <CustomTableCell numeric>Total</CustomTableCell>
                  <CustomTableCell numeric>rank</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.row} key={1}>
                  <CustomTableCell component="th" scope="row" />
                  <CustomTableCell numeric>803</CustomTableCell>
                  <CustomTableCell numeric>2626</CustomTableCell>
                  <CustomTableCell numeric>3429</CustomTableCell>
                  <CustomTableCell numeric>24th</CustomTableCell>
                  <CustomTableCell numeric />
                  <CustomTableCell numeric />
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TeamStats);
