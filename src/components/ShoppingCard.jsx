import React, { useReducer , useState } from "react";

const ShoppingCard = (props) => {
  const [state, dispatch] = useReducer(reducer, {count:1});

  function reducer(state, action) {
    if (action.type === "increment") {
      return {count: state.count + 1};
    } else if (action.type === "decrement") {
        if(state.count <= 1) return {count: 1};
        return {count: state.count - 1};
    } else {
      return {count: 1};
    }
  }

  const [visible,setVisible] = useState(true)
  

  return (
    <div className={`w-[300px] rounded-md h-[300px] bg-primary ${!visible ? 'hidden':''}`}>
      <img src={props.image} className="h-1/2 w-full rounded-t-md" alt="" />
      <div className="h-1/2 w-full ">
        <div className="flex justify-between p-5">
          <h1 className="uppercase text-text font-semibold">{props.name}</h1>
          <button onClick={() => setVisible(false)} className="text-red-600">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="flex justify-between p-5">
          <h1 className="text-text font-semibold">Rs.{props.cost * state.count}</h1>
          <div className="flex gap-3 text-white flex-col">
            <h1>Quantity : {state.count}</h1>
            <div className="flex gap-2 items-center justify-center"><button onClick={() => dispatch({type:"reset"})} className="p-1 w-[20px] flex items-center justify-center rounded-full  h-[20px] text-[10px] bg-tertiary text-primary">
              <i className="fa-solid fa-rotate-right"></i>
            </button>
            <button onClick={() => dispatch({type:"decrement"})} className="p-1 w-[20px] flex items-center justify-center rounded-full  h-[20px] text-[10px] bg-tertiary text-primary">
            <i className="fa-solid fa-minus"></i>
            </button>
            <button onClick={() => dispatch({type:"increment"})} className="p-1 w-[20px] flex items-center justify-center rounded-full  h-[20px] text-[10px] bg-important text-primary"><i class="fa-solid fa-plus"></i></button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
