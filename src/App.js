
import Main from "./components/Main";
import './App.css';
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21 } from "./components/Pics"


function App() {


 
 const picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21]
 const randomIndex = Math.floor(Math.random() * picArray.length);
 const randomPic = picArray[randomIndex]
 




 return (
      <div style={
        {backgroundImage: `url(${randomPic})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        }
      } 
      className="App">
        <Main />
      </div>
  );
}

export default App;
