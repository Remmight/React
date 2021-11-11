import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //const name = 'Remmy'
  return (
    <div className="App">
      <h1>Contact Form</h1>

      <form action="/action_page.php" method="get">
    <label for="Fname">First name:</label>
    <input type="text" id="Fname" name="Fname"></input>
    <label for="Lname">Last name:</label>
    <input type="text" id="Lname" name="Lname"></input>
    <br></br>
    <label for="Email">Email:</label>
    <input type="text" id="Email" name="Email"></input>
    <label for="Phone">Phone:</label>
    <input type="text" id="Phone" name="Phone"></input>
    <br></br>
    <input type="button" value="Submit"></input>

    </form>
    </div>

    
  );
}

export default App;
