import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import{ fetchUsers } from "../Reducer/User/Action"
import Button from './Button';
import PaginationRounded from './pagination'


function UserContainer(){
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers(1))
    }, [])

    const userData = useSelector(state => state.users.users)

    // const page = useSelector(state => state.ReducerFunction.totalPages)
    // const [data, setData] = useState([]);
    // const [showdata, setShowData] = useState(false)
    // const handleperpage = (i, j) => {
    //     dispatch(useSelector(j))
    // }

    // useEffect(() => {
    //     if (userData) {
    //         setData(userData);
    //     }
    //     else {

    //         setData([])
    //     }
    // }, [userData])


    console.log("userData", userData)
    return (userData.loading ? (
        <h2>Loading</h2>
    ): userData.error ? (
        <h2>{userData.error}</h2>
    ):(
        // showdata ? null :
        <div>
            
            <h2 className='page-heading'>pagination Using React-Redux</h2>
            <table className='center'>
                <tr>
                    <th>_ID_</th>
                    <th>Name</th>
                    <th>Trips</th>
                    <th>Airline_ID</th>
                    <th>Airline_name</th>
                    <th>Airline_Country</th>

                </tr>
                <tbody>
                {userData.data && userData.data.map(user => <tr key = {user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.trips}</td>
                    <td>{user.airline.id}</td>
                    <td>{user.airline.name}</td>
                    <td>{user.airline.country}</td>
                

                </tr> )}
                </tbody>
            </table>

<PaginationRounded/>
{/* <Pagination count={page} onChange={handleperpage}></Pagination> */}

            </div>
             ))
}
            
            
            
           
   
 
            
           

 export default UserContainer
 

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

   */}

            
          
           






            {/* <div>
                {userData.data && userData.data.map(user => <p key={user._id}> {user.name}</p>)}
            </div>  */}
  
// (
//     <tr key={user._id}>
//         <td>{user._id}</td>
//         <td>{user.name}</td>
//     </tr>
// )
// const mapStateToProps = state =>{
//     return {
//         userData: state.user
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return {
//         fetchUsers: ()=> dispatch(fetchUsers())
//     }
// }



// export default connect(mapStateToProps, fetchUsers) (UserContainer) 