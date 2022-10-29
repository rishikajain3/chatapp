import logo from './logo.svg'
import './App.css';
import { Chat } from './Chat';

//Javascript function
//App component
function App() {
  return (
    <div>
      <Chat photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUgZy_1_SonBM7MscNlYFgJ7RyhX8WNmbBw&usqp=CAU" name="Ranu" message="How are you" time="20 mins ago"/>
      <Chat photo="https://st2.depositphotos.com/3369547/11980/v/950/depositphotos_119808828-stock-illustration-businesswoman-avatar-business-icon.jpg" name="Rishika" message="I'm good!" time="2 mins ago"/>
      <Chat photo="https://cdn-icons-png.flaticon.com/512/147/147142.png" name="Lakshay" message="Let's play!!!" time="10 mins ago"/>
      <Chat photo="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" name="Sam" message="Had Breakfast?" time="30 mins ago"/>
      <Chat photo="https://cdn2.vectorstock.com/i/1000x1000/01/66/businesswoman-character-avatar-icon-vector-12800166.jpg" name="Riya" message="Let's play carrom!!" time="15 mins ago"/>
    </div>
  );
}

export default App;

//chatapp--> Welcome to my React application
//run? -> npm start

//Bootstrap--> used to save time

//chat component--> create a js file

