import { useRef } from "react";

function App(){
    const counterRef = useRef(0);
}

const handleIncrement = () =>{
    counterRef.current++;
};

return(
    <div className="App">
        <button onClick={handleIncrement}>Increment</button>
    </div>
);

export default App;