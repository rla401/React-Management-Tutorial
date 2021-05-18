import Customer from './components/Customer'
import React,{Component} from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
import './App.css';
import { Paper } from '@material-ui/core';

const styles = theme =>({
  root:{
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080
  }
})

const customers =[{
  'id': '1',
  'image':'https://placeimg.com/64/64/1',
  'name':'김도형',
  'birthday':'901010',
  'gender' : '남자',
  'job' : '개발자'
},
{
  'id': '2',
  'image':'https://placeimg.com/64/64/2',
  'name':'이수댁',
  'birthday':'940702',
  'gender' : '남자',
  'job' : '취준생'
}
,
{
  'id': '3',
  'image':'https://placeimg.com/64/64/3',
  'name':'엥도',
  'birthday':'981230',
  'gender' : '남자',
  'job' : '대학생'
}
]
class App extends Component{
  render(){
    const { classes } = this.props;
   return(
     <Paper className={classes.root}>
       <Table className={classes.table}>
         <TableHead>
           <TableCell>번호 </TableCell>
           <TableCell>이미지</TableCell>
           <TableCell>이름 </TableCell>
           <TableCell>생년월일</TableCell>
           <TableCell>성별</TableCell>
           <TableCell>직업</TableCell>
         </TableHead>
         <TableBody>
         { customers.map(c => {   return (<Customer id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}  />  );  })  }
         </TableBody>
        </Table>
     
     </Paper>
   );
  }
}

export default withStyles(styles)(App);
