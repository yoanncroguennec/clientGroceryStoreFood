import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";




export default function SignUp() {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const userInputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: 3,
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: 4,
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
    },
    {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];


  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const newUser = {
        ...info,
        // img: url,
      };

      await axios.post("/auth/register", newUser);
      navigate("/"); 
    } catch (err) {
      console.log(err);
    }  
  };

  return (
    <>

      <form>
          {userInputs.map((input) => (
            <div className="formInput" key={input.id}>
              <input
                onChange={handleChange}
                type={input.type}
                placeholder={input.placeholder}
                id={input.id}
              />
            </div>
          ))}
          <button onClick={handleClick}>Send</button>
      </form>
    </>
  )
}
