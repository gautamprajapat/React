import React from 'react'
import { useState } from 'react'

function MultipleInputForm() {
    const [inputs,setInputs]=useState({
        username: '',
        userage: '',
        useremail: '',
        useraddress: ''
    });

    const [textArea,setTextArea]=useState(
        "this is dedfault test area"
    );

    const [myCar,setMyCar]=useState("Mercedese");




    const handleChange=(e)=>{
        const name= e.target.name;
        const value=e.target.value;

        setInputs((values)=>({...values,[name]:value}))



    }


    const handleChangeTextArea=(e)=>{
        
        const value=e.target.value;
        setTextArea(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify({...inputs,textArea,myCar}))
    }
  const  handleChangeMyCar =(e)=>{
    const value=e.target.value;
    setMyCar(value)


    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:
            <input type="text"
            name='username'
            value={inputs.username}
            onChange={handleChange}
            
            />
        </label>
            <br />
        <label>Enter Age:
            <input type="number"
            name='userage'
            value={inputs.userage}
            onChange={handleChange}
            
            />
        </label>

        <br /><br />
        <label>Enter Email:
            <input type="email"
            name='useremail'
            value={inputs.useremail}
            onChange={handleChange}
            
            />
        </label>
        <br /><br />
        <label>Enter Address:
            <input type="text"
            name='useraddress'
            value={inputs.useraddress}
            onChange={handleChange}
            
            />
        </label>
        <label >Other:
        <textarea
        name='usertextarea'
        value={textArea}
        onChange={handleChangeTextArea}

        
        ></textarea>
        </label>
        <br /><br />

        <select
        
        name="usercar" 
        value={myCar}
        onChange={handleChangeMyCar}>
            <option value="Fiat">Feat</option>
            <option value="Ferrari">Ferrari</option>
            <option value="HondaCity">HondaCity</option>
            <option value="Lamborgini">Lamborgini</option>



        </select>
        <input type="submit" />
      </form>
    </div>
  )
}

export default MultipleInputForm
