import React from 'react'

const Button = ()=> {
    
    
    return (
        <div>
        <button>First</button>
        <button>prev</button>
        <button>1</button>
        <button>2</button>
        <button>Next</button>
        <button>Last</button>
    
        </div>
        )
    
}
export default Button


{/* <button disabled={prevDisabled} onClick={()=>{
    setFirstValue(0)
    setLastValue(rowLimit)
    setPageCount(1)
    console.log(pageCount);
    }}
  >First</button>
  <button disabled={prevDisabled} onClick={()=>{
    console.log(pageCount);
    if(firstValue > 0 && lastValue > rowLimit){
      setFirstValue(firstValue - rowLimit)
      setLastValue(lastValue - rowLimit)
      if(pageCount > 1){
        setPrevDisabled(false)
        setPageCount(pageCount - 1)
      }
  }}}>Prev</button>
  <button style={{color:colors[0]}} onClick={()=>{
    setToggle(0)
    console.log(pageCount);
    if(toggle === 1 && pageCount > 1){
      setFirstValue(firstValue - rowLimit)
      setLastValue(lastValue - rowLimit)
      setColor('black')
    }
  }}>{pageCount}</button>
  <button style={{color:colors[1]}} onClick={()=>{
    setPrevDisabled(false)
    setToggle(1)
    if(toggle === 0){
    setFirstValue(firstValue + rowLimit)
    setLastValue(lastValue + rowLimit)
    setColor('red')
    }
  }}>{pageCount + 1}</button>
  <button disabled={nextDisabled} onClick={()=>{
    if(firstValue < 90 && lastValue < 100){
      setFirstValue(firstValue + rowLimit)
      setLastValue(lastValue + rowLimit)
      if(pageCount < pageLimit - 1){
        setPageCount(pageCount + 1)
      }
      console.log(pageCount);
    }}}>Next</button>
  <button disabled={nextDisabled} onClick={()=>{
    setFirstValue(90)
    setLastValue(100)
    setPageCount(9)
    console.log(pageCount);
  }}>Last</button>
</div>
  ); */}
