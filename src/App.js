import  NavBar from"./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App(){
    return (<div>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos"}/>
        <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log("Cantidad agregada". quantity)}/>
        </div>

    )
}


export default App;