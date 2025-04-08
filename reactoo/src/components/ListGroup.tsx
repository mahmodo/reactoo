import {useState} from "react";



interface Props{
    items:string[];
    heading:string;
}
function ListGroup({items,heading}:Props) {
    // let items=["new York","London","Düsseldorf","neuss"];
    // let selectedIndex=0;

    // HOOK
    const [selectedIndex,setSelectedIndex] =useState(-1);
    //


    items.map(item=><li className="list-group-item">{item}</li>)
    return (
        <>
            <h1>{heading}</h1>
            {items.length===0 && <p> No item Found </p> }
        <ul className="list-group">
            { items.map((item,index)=><li
                key={item}
                onClick={()=>setSelectedIndex(index)}
                className={selectedIndex===index ?"list-group-item active" :"list-group-item"}
            >
                {item}
            </li>
            )}
        </ul>
        </>);

}

export default ListGroup;