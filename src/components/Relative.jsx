import React from 'react';

const Relative=()=>{
    const arr=["ram","shyam","sita","reeta"];
    return(
        <div id="main">
            <ol>
            {
                arr.map(value=>(
                    <li>{value}</li>
                ))
            }
            </ol>
        </div>
    )
}
export default Relative;