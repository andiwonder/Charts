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
  }
});

class GritTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Energy</CustomTableCell>
                <CustomTableCell numeric>steals</CustomTableCell>
                <CustomTableCell numeric>blocks</CustomTableCell>
                <CustomTableCell numeric>true_shooting_pct</CustomTableCell>
                <CustomTableCell numeric>effective_fg_pct</CustomTableCell>
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
                <CustomTableCell>Fouls</CustomTableCell>
                <CustomTableCell numeric>personal fouls</CustomTableCell>
                <CustomTableCell numeric>tech fouls</CustomTableCell>
                <CustomTableCell numeric>flagrant fouls</CustomTableCell>
                <CustomTableCell numeric>fouls drawn</CustomTableCell>
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
    );
  }
}

export default withStyles(styles)(GritTable);