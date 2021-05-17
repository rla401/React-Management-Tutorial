import Customer from './components/Customer'
import React,{Component} from 'react';
import './App.css';

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
   return(
     <div>
       {
         customers.map(c => {
           return (<Customer
           id={c.id}
           image={c.image}
           name={c.name}
           birthday={c.birthday}
           gender={c.gender}
           job={c.job}
           />
         );
         })
       }
     </div>
   );
  }
}

export default App;
