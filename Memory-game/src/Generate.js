import React, {useState} from 'react';



const Generate =(props)=>{

     const [random, setrandom] = useState('');
     const [checker, setchecker] = useState(false)

          const  generateRandomNumber=(e)=>{
                    e.preventDefault();
                    let randomTemp = Math.floor(Math.random()*1000000);
                    setrandom(randomTemp);
                    localStorage.setItem('number', randomTemp);
                    setchecker(true);
                    setTimeout(()=>{props.history.push('/Output')}, 5000);
                }

                if (checker===true){
                    var x = <p>Refreshing the page in 5 seconds...</p>
                }
    
            return(
                    <div>
                    <h1>Generate The Number</h1>
                    <p>{random}</p>
                    <br />
                    <button onClick={generateRandomNumber}>generate</button>
                    <br/>
                    {x}
                    </div>
                     );
}

export default Generate;
