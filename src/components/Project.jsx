import React, { useState } from 'react'
import styled from "styled-components"
const Project = () => {
    const [saw, setsaw] = useState(false)
    const [val, setval] = useState("")
    const [ans, setans] = useState("")
    const [dis, setdis] = useState(true)
   // const [view,setview]=useState(true)
    const arr=["Gina Williams","Jack Williams","Jamie John","John Doe","Jeff Stewart","Paula M. Keith"]
    const handlechange = (e) => {
        if (e.keyCode == 50) {
            setsaw(true)
            setans("")
            setval("")
           // setview(false)
        }else {
             setans(e.target.value) 
            // setview(false)      
        }
        //console.log(e.keyCode)
    }
    const handleselect = (e) => {
        const { value } = e.target;
        console.log(value)
        setans(value)

    }
    const handleadd=(e)=>{
        setdis(false)
        setval(e.target.value)
        setview(false)
    }
    return (
        <Div  style={{ display: "flex", flexDirection: "column", margin: "auto", height: "auto", width: "500px", border: "1px solid teal",textAlign:"center" }}>
             <h1>Project</h1>
             <br />
             <br />
            <input width="200px" height="200px" type="text" value={val} onChange={(e) => setval(e.target.value)} onKeyUp={handlechange} />

              <br />
            <div>
                <button  onClick={() =>handleadd}>+ Add Note</button>
               <br />
               <button disabled={dis==true} onClick={() => {
                    setval("")
                    setans("")
                    setdis(true)
                    return setsaw(false)
                }}>Reset</button>
            </div>
            {
                saw && <select name="" id="" value={ans} onChange={handleselect}>
                    <option value="">Select</option>
                    
                    {
                        arr.map((item)=>{
                            return <option value={item}>{item}</option>
                        })
                    }
                </select>
            }
            {
               val?<h1>{val}</h1>: <h1>{ans}</h1>
            }


        </Div>
    )
}

export default Project


const Div=styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px

    `