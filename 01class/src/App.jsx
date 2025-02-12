import './App.css'
import Item from './component/item'
import ItemDate from './component/itemdate'

const data = [
  { year: "1924", day: "20", month: "June", name: "nirama" },
  { year: "2021", day: "21", month: "August", name: "Ayush" },
  { year: "2000", day: "1", month: "January", name: "John" },
  { year: "1995", day: "15", month: "March", name: "Doe" },
  { year: "2010", day: "10", month: "December", name: "Smith" }
];

function App() {
  return (
    <>
       <h1 className='ayush'>Welcome to my website</h1>
      {data.map((item, index) => (
        <div key={index}>
          <ItemDate date={item} />
          <Item name={item.name} />
        </div>
      ))}
      
    </>
  )
}

export default App
