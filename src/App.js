import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      <div className='CardDiv'>
        <Card
          name="Lady Gaga"
          img="https://www.hollywoodreporter.com/wp-content/uploads/2011/06/lady-gaga-publicity-side-11-a-p.jpg_a_p.jpg"
          tel='+12 345 67 89'
          email='gaga@gmail.com'
        />
        <Card
          name="Ariana Grande"
          img="https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/b0/c1/95/b0c19533-8c69-6911-dba4-2770331a56e8/pr_source.png/375x375bb.jpg"
          tel='+02 987 38 22'
          email='a_grande@hotmail.com'
        />
        <Card
          name="Dua Lipa"
          img="https://pbs.twimg.com/profile_images/1486133948333715456/e3WKN7y9_400x400.jpg"
          tel='+44 018 57 30'
          email='dualipa@yahoo.com'
        />
      </div>
    </div>
  );
}

export default App;
