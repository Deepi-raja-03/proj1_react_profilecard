
import {LearnComponent } from "./component/LearnComponent";

import { Header } from "./component/Header";
import { ChildComponent } from "./component/ChildComponent";
import { Student } from "./component/Student";
import { ArraySample } from "./component/ArraySample";
import { OneOfSample } from "./component/OneOfSample";
import { MultiTypeComponent } from "./component/MultiTypeComponent";
import { FunctionSample } from "./component/FunctionSample";
import "./css/app.css";


function App(){
   const handleclick = () =>{
      alert("the button is clicked!")
  };
   const items=[
      {id: 1, name: "Item1"},
      {id: 2, name: "Item2"},
      {id: 3, name: "Item3"},
   ];
  return (
     <>
     <div>
        hello world
     </div>
     <LearnComponent />
     <Header />
     <Student name="Deepika" age={20} isReactdeveloper={true}/>
     <Student name="Thiya" age={10} isReactdeveloper={true}/>
     <Student name="Pushpalatha" age={40} isReactdeveloper={false}/>
     <Student name="Rajamani" age={50} isReactdeveloper={false}/>
     <Student  />
     <ChildComponent> 
         <p>This is sample content1</p>
         <p>This is sample content2</p>
         <p>This is sample content3</p>

     </ChildComponent>
     <ArraySample items={items} />
     <OneOfSample  color="pink"/>
     <MultiTypeComponent  value="hello"/>
     <MultiTypeComponent  value={13}/>
     <MultiTypeComponent  value={false}/>
     <FunctionSample handleclick={handleclick} />

     </>
  );
}
export default App;


