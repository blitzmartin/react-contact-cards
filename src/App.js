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
        <Card
          name="Grimes"
          img="http://images6.fanpop.com/image/photos/33100000/Grimes-grimes-33199219-386-515.jpg"
          tel='+05 984 92 48'
          email='grimes@gmail.com'
        />
         <Card
          name="Charli XCX"
          img="https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/7/0b/70b57e66-8586-5950-a5ed-703fb70b8b7c/5d16731bb6f58.image.jpg?resize=500%2C500"
          tel='+08 156 87 24'
          email='c_xcx@yahoo.com'
        />
         <Card
          name="Doja Cat"
          img="https://assets.popbuzz.com/2020/08/doja-cat-1582819502-view-1.jpg"
          tel='+66 735 18 37'
          email='doja@gmail.com'
        />
      </div>
    </div>
  );
}

export default App;
