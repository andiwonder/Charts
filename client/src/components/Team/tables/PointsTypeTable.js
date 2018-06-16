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

class PointsTypeTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item md={5} style={{ marginBottom: '2em' }}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell numeric>Paint</CustomTableCell>
                <CustomTableCell numeric>Fast Break</CustomTableCell>
                <CustomTableCell numeric>2nd Chance</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.row} key={'points_type_table_1'}>
                <CustomTableCell numeric>7603</CustomTableCell>
                <CustomTableCell numeric>5218</CustomTableCell>
                <CustomTableCell numeric>1845</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'points_type_table_2'}>
                <CustomTableCell numeric>3365</CustomTableCell>
                <CustomTableCell numeric>2707</CustomTableCell>
                <CustomTableCell numeric>658</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'points_type_table_3'}>
                <CustomTableCell numeric>47.6%</CustomTableCell>
                <CustomTableCell numeric>51.9%</CustomTableCell>
                <CustomTableCell numeric>35.7%</CustomTableCell>
              </TableRow>
              <TableRow className={classes.row} key={'points_type_table_4'}>
                <CustomTableCell numeric>13</CustomTableCell>
                <CustomTableCell numeric>15</CustomTableCell>
                <CustomTableCell numeric>21</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(PointsTypeTable);
