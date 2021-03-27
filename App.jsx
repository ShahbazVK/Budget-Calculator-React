/*const hero='Shahbaz';
const favcourse='react js';
let name='';
function cricketer () {
    return (name='Kohli');
}
export default hero;
export {favcourse,cricketer};*/

// import { createContext, useContext, useDebugValue, useEffect, useState } from "react";
// import Button from '@material-ui/core/Button';
// import Clock from 'react-digital-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import BookContainer from './components/bookContainer'
// import Store from './redux/Store'
import { Provider } from 'react-redux'
import Header from './REDUX_STARTED/components/Header'
import Home from './REDUX_STARTED/components/Home'
import HeaderContainer from './REDUX_STARTED/containers/HeaderContainer'
import HomeContainer from './REDUX_STARTED/containers/HomeContainer'
import Front from './BUDGET/Front'

// import ComA from './ComA'
// import {NavLink, Route,Switch} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Menu from './Menu';
// import { Search } from "@material-ui/icons";
// import Login from './Login'
// // import Signup from "./Signup";
// import  { Redirect } from 'react-router-dom'
// import {Userform} from "./Userform";
// //import Userform from './Userform'
// import OneAtATime from './Userform'
// import React,{Component} from 'react'
// import Signup from "./Signup";

/*function add(a,b){
    return(a+b);
}
function sub(a,b){
    return(a-b);
}
function mul(a,b){
    return(a*b);
}
function div(a,b){
    return(a/b);
}
export {add,sub,div,mul};*/

/*function Card(props){
    return(
        <>
            <img src={props.imgsrc}/>
            <h1>{props.title}</h1>
            <h3>{props.sname}</h3>
        </>
    )
}
export default Card;*/

/*const oldarr=[
    {firstname:'Shahbaz', lastname:'Ali'},
    {firstname:'Shahzad', lastname:'Ali'},
    {firstname:'Salima', lastname:'Ali'}
];
const newarr=oldarr.map((abc) => {
    return 'my name is '+ abc.firstname;
});
console.log(oldarr);
console.log(newarr);*/

/*function Justrun(props) {
    return(
        <>
            <h1>hey {props.boyname}</h1>
            <h1>{props.girlname}</h1>
            <h1>HIIIIIIIIIIII</h1>
            </>
    )
}

function Njustrun(val){
    return
    <Justrun>
    {val.boyname,
    val.girlname
    }
    </Justrun>
};


export default Justrun;
export {Njustrun};*/
/*

function Slot(props) {
    let x= props.x;
    let y= props.y;
    let z =props.z;
    if (x===y && y===z){
        return (
            <>
        <h1>Matched</h1>
        <h1>{x},{y},{z}</h1>
        </>
        )

    }
    else{
        return (<>
        <h1>Not Matching</h1>
        <h1>{x},{y},{z}</h1>
        </>)
    }
    
}
export default Slot;*/


/*const App= ()=>{
    const  state=useState();
    const [count,setCount] =useState(0);


    const IncNum=()=>{
        setCount(count +1);

    };
    return(
        <>
        <h1> {count} </h1>
        <h1></h1>
        <button onClick={IncNum}>click</button>
        </>
    )
};
export default App;*/

/*const App =() =>{
    let Time=new Date().toLocaleTimeString();
    const [Ctime,Setctime]=useState(Time);
    const UpdatedTime=()=>{
        Time=new Date().toLocaleTimeString();  // present time, maybe more than 2 3 seconds than before
        Setctime(Time);
    }

    return(
        <>
            <h2>Time:</h2>
            <h2>{Ctime}</h2>
            <button onClick={UpdatedTime}>GET TIME</button>
        </>
    )
};

export default App;*/

/*const App=()=>{
    let Time= new Date().toLocaleTimeString();
    //const state=useState();
    const [Ctime,Uptime]=useState(Time);
    let IncTime=()=>{
        Time=new Date().toLocaleTimeString();
        Uptime(Time);
    }
    setInterval(IncTime,1000);
    return(
        <>
            <h1>{Ctime}</h1>
        </>
    )
}

export default App;*/
/*
const App =()=> {
    const [bg,Setbg]=useState('lightBlue');
    const [name, Setname]=useState('Click Me ');

    const Bgchange=()=>{
        Setbg("orange");
        Setname('ouch');
    }
    const Bgback=()=>{
        Setbg("lightBlue");
        Setname('oue hoye');
    }
 
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={Bgchange} onDoubleClick={Bgback}>{name}</button>
        </div>
        </>
    )
};
export default App;*/

/*const App=()=>{
    const [name,Setname]=useState('');
    const [fullname,Setfullname]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullLastName,setFullLastName]=useState('');
    const inputEvent=(event)=>{//write props instead of event
        Setname(event.target.value);
    }
    const inputEventTwo=(event)=>{//write props instead of event
        setLastName(event.target.value);
    }
    const onSubmitting=(events)=>{
        events.preventDefault();
        Setfullname(name);
        setFullLastName(lastName);
    }
    return(
        <>
        <form onSubmit={onSubmitting}>
            <div>
                <h1>Hello {fullname} {fullLastName}    </h1>
                <input type="text" placeholder='Enter Your Name' onChange={inputEvent} style={ {backgroundColor:'orange'}} />
                <input type="text" placeholder='Enter Your Last Name' onChange={inputEventTwo} style={ {backgroundColor:'orange'}} />
                <button type='submit' style={{backgroundColor:'green'}}>Click Me 👍    </button>
            </div>
        </form>
        </>
    );
}
export default App;*/
/*const App=()=>{
    const fullName=[' Shahbaz ' , 'Ali '];
    const biodata=[1 ,...fullName, 25," male"];
    return biodata;
}
export default App;*/


/*const App=()=>{
    const [fullName,setFullName]=useState({
        fName:"Heinrich",
        lName:"Klassen",
        email:'',
        mNumber:'',
    });

    const inputEvent=(event)=>{//write props instead of event
        const value=event.target.value;
        const name=event.target.name;  //fname, lame
        setFullName( (preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }

            // if(name==='fName'){
            //     return{
            //         fName:value,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         mNumber:preValue.mNumber,
            //     };
            // }
            // else if(name==='lName'){
            //     return{
            //         fName:preValue.fName,
            //         lName:value,
            //         email:preValue.email,
            //         mNumber:preValue.mNumber,
            //     };
            // }
            // else if(name==='email'){
            //     return{
            //         fName:preValue.fName,
            //         lName:preValue.lName,
            //         email:value,
            //         mNumber:preValue.mNumber,
            //     };
            // }
            // else if(name==='mNumber'){
            //     return{
            //         fName:preValue.fName,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         mNumber:value,
            //     };
            // }
        });
    };


    const onSubmitting=(events)=>{
        events.preventDefault();/////stop from refreshing the page due to<form> tag
        alert('form submitted');
    }
    return(
        <>
        <form onSubmit={onSubmitting}>
            <div>
                <h1>Hello {fullName.fName} {fullName.lName}</h1>
                <p>{fullName.email} {fullName.mNumber}</p>
                <input type="text" name='fName' 
                //value={fullName.fName}
                placeholder='Enter Your Name' onChange={inputEvent} style={ {backgroundColor:'orange'}} />
                <input type="text" name='lName' 
                //value={fullName.lName}
                placeholder='Enter Your Last Name' onChange={inputEvent} style={ {backgroundColor:'orange'}} />
                <input type="email" name='email' 
                //value={fullName.fName}
                 placeholder='Enter Your Email' onChange={inputEvent} style={ {backgroundColor:'orange'}} />
                <input type="number" name='mNumber' 
                //value={fullName.lName}
                placeholder='Enter Your mobile' onChange={inputEvent} style={ {backgroundColor:'orange'}} />
                <button type='submit' style={{backgroundColor:'green'}}>Click Me 👍    </button>
            </div>
        </form>
        </>
    );
}
export default App;*/

/*const App=()=>{
    const[inputList,setInputList]=useState('Buy Apple');
    const[items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        });
        setInputList('');
    }
    return(
        <>
        <h1>TODO LIST</h1>
        <input type='text'placeholder='Add item' onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>
        <ol>
            {items.map((itemsVal)=>{
                return <li>{itemsVal}</li>
            })}
        </ol>
        </>
    )
}
export default App;*/
/*const App=()=>{
    const [num,setnum]=useState(0);
    //const [num,setnum]=useState(0);
    const inc=()=>{
        setnum(num+1);
    }
    const dec=()=>{
        if (num>0){
            setnum(num-1);
        }
        else{
            alert('limit reached');
        }
    }
    return(
        <>
            <h1> {num} </h1>
            <button onClick={inc}> INCREMENT </button>
            <button  onClick={dec}> DECREMENT </button>
            <Clock />
        </>
    )
}
export default App;*/

/*const App=()=>{
    return(
        <>
            <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Another label</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div>
        </>
    )
}
export default App;*/
/*
const App=()=>{
    return(
        <>
            <h1 className='  '>welcome shahbaz ali</h1>
        </>
    )
}
export default App;*/
/*const firstName=createContext();
const App=()=>{
    return (
    <>
    <firstName.Provider value={'Ali'}>
        <ComA/>
    </firstName.Provider>
    </>
    )
};
export default App;
export {firstName};*/

/*const firstName=createContext();
const App=()=>{
    return (
    <>
    <firstName.Provider value={'Alisss'}>
        <ComA/>
    </firstName.Provider>
    </>
    )
};
export default App;
export {firstName};*/

/*const App=()=>{
    const[num,setNum]=useState(0);
    const[nums,setNums]=useState(0);

    useEffect(()=>{
        alert('I am Clicked');
    },[nums]);

    return(
        <>
            <button className='mt-5 btn-success' onClick={()=>{
                setNum(num+1)
            }}>Click Me {num} </button>

            <button onClick={()=>{
                setNums(nums+1)
            }}>Click Me {nums} </button>
        </>
    );
}
export default App;*/

/*const App=()=>{
    const[num,setNum]=useState(0);

    useEffect(()=>{
        document.title=`You have clicked ${num} times`;
    });

    return(
        <>
            <button className='mt-5 btn-success' onClick={()=>{
                setNum(num+1)
            }}>Click Me {num} </button>
        </>
    );
}
export default App;*/
/*const App=()=>{
    return(
        <>
            <ComA/>
        </>
    );
}
export default App;*/
/*
const App=()=>{
    const Name=()=>{
        return <h1>Shahbaz Ali</h1>
    }
    
    return(
    <>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='/contact/name' component={Name}/>
        </Switch> 
    </>
    );
}
export default App;*/

/*const App=()=>{
        const Name=()=>{
            return <h1>Shahbaz Ali</h1>
        }
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='/contact/name' component={Name}/>
        </Switch> 
        </>
    )
}
export default App*/
/*
const App=()=>{
    return(
        <>
        <Menu/>
            <Switch>
                <Route exact path='/' component= {About}/>
                <Route exact path='/Signup' component={Signup} />
                <Route exact path='/Login' component={()=> <Login  />} />
            </Switch>
        </>
    );
}
export default App;
not done */

/*
const Signup=()=>{
    return(
        <h1>Hi from signup</h1>
    );
}
const Login=()=>{
    return(
        <h1>Hi login</h1>
    );
}
const App=()=>{
    return(
        <>
        <h1>Hi Legend! Wanna Signup or login?</h1>
        <button onClick={Signup} >Signup</button>
        <br/>
        <button onClick={Login} >Login</button>
        <button onClick={()=>{
            return(
                <h1>Hi</h1>,
                <h2>abcjdkc </h2>
            )
        }} >Login</button>
        </>
    );
}
export default App;*/
/*
const App=()=>{
    const[city,setCity]=useState('');
    const[search,setSearch]=useState('Mumbai');
    useEffect(()=>{
        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=21769c083ccbb6bb35b8102ebbf76771`;
            const response=await fetch(url);
            
            const resjsn= await response.json();
            //console.log(resjsn);
            setCity(resjsn);
        };
        fetchApi();
    });
    return(
        <>
        <input 
        type="Search" 
        defaultValue='' 
        onChange={ (event)=>{
            setSearch(event.target.value)
        }

        } />
        <h1>{search} {city.main.temp}</h1>
        <h3>min : 5.25 Celcius</h3>
        <h3>max : 5.25 Celcius</h3>
        </>
    )
}
export default App;*/


/*
 const App=()=>{
    return(
        <>
        <Userform/>
        </>
    )
 }
 export default App;

*/
/*
class Student extends Component{
    state={
        name: "Rahul",
        number: "0324",
        roll: this.props.roll
    }
    start=()=>{
        const name=this.state;//very important step. this step will be used in every function of same class. function including render too.
        this.setState(
            {name:'Shahbaz'}
            )
    }
    render(){
        return(
            <>
            <h1>hi</h1>
            <h2>hello</h2>
            <h3>{this.state.name}</h3>
            <h4> {this.state.number} </h4>
            <h5> {this.state.roll} </h5>
            <button onClick={()=>{
                this.setState({number: "1234"})
            }} >Click kar btata hon</button>
            <button onClick={this.start} >Click kar wapis btata hon</button>
            </>
            
        )
    }
}
export default Student;*/

/*
const App=()=>{
    return(
        <Signup/>
    )
}
export default App;*/
/*
const App=()=>{
    return <h1>hi</h1>
}
export default App;*/
/*
const App=()=>{
    return(
        <>
            <HeaderContainer/>
            <HomeContainer/>
        </>
    )
}
export default App;*/

const App = () => {
    return (
        <>
            <Front />
        </>
    )
}
export default App;