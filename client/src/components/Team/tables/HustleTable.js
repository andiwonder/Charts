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
    // minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

class HustleTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item md={3}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>TeamPlay</CustomTableCell>
                <CustomTableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.row} key={'hustle_table_1'}>
                <CustomTableCell>assists</CustomTableCell>
                <CustomTableCell numeric>1962</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'hustle_table_2'}>
                <CustomTableCell>turnovers</CustomTableCell>
                <CustomTableCell numeric>1238</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'hustle_table_3'}>
                <CustomTableCell>ratio</CustomTableCell>
                <CustomTableCell numeric>1.58</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'hustle_table_4'}>
                <CustomTableCell>rank</CustomTableCell>
                <CustomTableCell numeric>11th</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(HustleTable);
