import './index.css';
import Welcome from './components/Welcome'
import WelcomeClass from './components/WelcomeClass';
import Clock from './components/Clock';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
//object
const user = {
  firstName: 'Hirva',
  lastName: 'Dhandhukia'
}

function App() {
  return (
    <div className="App">
      <h1>
        Hello, {formatName(user)}
      </h1>
      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      {/* <Welcome name='Hirva'/> */}
      {/* <WelcomeClass name="Yooooo" /> */}

      <Clock />

    </div>
  );
}

export default App;
