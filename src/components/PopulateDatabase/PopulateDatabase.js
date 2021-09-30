import Users from '../../assets/import';

const PopulateDatabase = (props)=>{
    const populateDb = ()=>{
        Users.forEach(user => {
            //console.log(user)      ;
          fetch('https://meals-f92cb-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          }).then(
            (response)=>response.json()
          ).then(
            data=>console.log(data)
          ).catch(
            (ex)=>console.log('Error', ex)
          )});    
    }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;