import { useState, useEffect } from 'react';

// import Todo from './components/Todo'
import GenerateUser from './components/GenerateUser'
function App() {

  const [user, setUser] = useState({firstName: '', lastName:'', email: '', phone: '', picture: '', city: ''});
  useState(() => {
     handleClick();
  }, [])

  function handleClick() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(
      (data) =>{
        let useObj = {firstName: data.results[0].name.first, lastName: data.results[0].name.last, email: data.results[0].email, phone: data.results[0].phone, picture: data.results[0].picture.large,city: data.results[0].location.city}
        setUser(useObj)
      }
    )
  }
  
  return <div>
    <div>
      {/* <h1>MY TODO</h1> */}
      {/* <Todo todo="Learn Reactjs" />
      <Todo todo="Learn NextJS"/>
      <Todo todo="Learn Vuejs"/> */}
        {console.log(user)}
      <GenerateUser generate={handleClick} userInfo={user}/>
    </div>
  </div>
}

export default App;
