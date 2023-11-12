import React , {useState , useEffect} from 'react';
import './style.css';
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareCheck,faRotateLeft} from  '@fortawesome/free-solid-svg-icons';

export default function Form() {


    // date of today 
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
      const currentDate = new Date();
      const options = { weekday: 'long',
      day: 'numeric',  
      month: 'long' }; 
      const day = currentDate.toLocaleDateString('en-US', options);
      setCurrentDay(day);
    }, []);
  


    // todo state
    const [todo,setTodo] = useState([
     
  ]);



//read the new value of an input
const [tacheValue , setTacheValue] = useState('');

// update todo
const [updateTodo, setUpdateTodo] = useState('')



const modifyTach = e => {
  setTacheValue(e.target.value);

}

const addTodo = e => {
  e.preventDefault();
  //  create a new array to put the new todo tache
  const newTach = [...todo];
  if(tacheValue !== ''){
    newTach.push({'txt':tacheValue,'id':uuidv4(),'status' : false});
  }
  // put the new array in the setTodo
  setTodo(newTach);

  //empty the input value
  setTacheValue('');
}

const deletFunc = id => {
  let afterDelet = [...todo];
  let arr = afterDelet.filter(element => {
    return element.id !== id ;
  })
  setTodo(arr)
}


const done = id => {
      let newTask = todo.map(element => {
        if(element.id === id) {
          return ({...element, status : !element.status})
        }
        return element;
      })
      setTodo(newTask);
}

const cancel = () => {
  setUpdateTodo('');
}


const editTodo = () => {
    let filterForEdit = [...todo].filter(element => 
       element.id !== updateTodo.id
    );
    let editedTasks = [...filterForEdit,updateTodo];
    setTodo(editedTasks);
    setUpdateTodo('')
}

const changeTask = (e) => {
      let newTask = {
        txt :e.target.value ,
        id :updateTodo.id ,
        status : updateTodo.status ? true : false
      };
      setUpdateTodo(newTask);
}



  return (
    
    <div className='container todoForm'>

     <h3> {currentDay}</h3>  

      {/* update task */}

      {updateTodo ? (
        <>
        <div className=" row w-75 m-auto">
        <div className="col " >
        <input type="text"
          className='form-control form-control border border-0 border-bottom'
          value={updateTodo && updateTodo.txt} 
          onChange={(e) => changeTask(e)}
          />
         
        </div> 
        <div className="col">
        <span  title='submit' className=' fw-bold updateBtn' 
          onClick={() => editTodo()}> <FontAwesomeIcon icon={faSquareCheck}/>
          </span>
          <span title='cancel' className=' fw-bold cancelBtn' 
           onClick={() => cancel()}><FontAwesomeIcon icon = {faRotateLeft}/></span>
        </div>
      </div>
        </>
      ) : (
        <>
 
      {/* add task form */}
        
        <div className="input-group mb-3 ">
        <input type="text" className="form-control border border-0 border-bottom"
        placeholder="Add task" value={tacheValue} onChange={modifyTach}/>
        <div className="input-group-append">

            <span className="input-group-text border-0 border-bottom bg-white" id="basic-addon2"
             onClick={e => addTodo (e)}
            >+</span>

        </div>
        </div>
        </>

      )}


     {/* afficher les tache */}
    <ul className='mt-5' >

    <span className='text-secondary'> {todo.length ? '' : 'No tasks !' }</span>

    


     {todo.map((element,index)=>{

        return <Task
        status = {element.status} number={index + 1} 
       text={element.txt.charAt(0).toUpperCase() + element.txt.slice(1)}  
       key={element.id} 
       deleteTodo = {() => deletFunc(element.id)}
       markDone = {() => done(element.id)} 
       edit = {() => setUpdateTodo({
         txt : element.txt,
         id : element.id,
         status : element.status ? true : false
       })}/>

      })}


    </ul>
    
     
    </div>
  )
}

