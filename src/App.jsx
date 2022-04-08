
import './App.css';


let data1=["Android","Blackberry","Iphone","Windows Phone"]
let data2=["Samsung","HTC","Micromax","Apple"]
function App() {
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      {data1.map((item)=>{
        return <Heading data={item} />
        
      })}
      <h2>Mobile Manufacturers</h2>
      {data2.map((item)=>{
        return <Heading data={item} />
        
      })}
      
    </div>
  );
}
// component
function Heading(props){
  
  return <li className='itemclass'>{props.data}</li>
}

export default App;
