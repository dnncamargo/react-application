import Item from "./components/item";
import Card from "./components/card";

const App = () => {
    return (
      <>
        <h1>Minha primeira aplicação com React</h1>
        <ul className="list-group">
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item />
        </ul>
        <Card />
      </>
    )};

export default App;