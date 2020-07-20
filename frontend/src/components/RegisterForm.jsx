import React, {useState} from 'react'
import axios from 'axios'
const RegisterForm = ()=> {
    const [input, setInput] = useState({firstName: '', age: '', location: '', gender: '', hobbiesBefore: '', hobbiesAfter: '', antibodies: true, image: '' })
    const [user, setUser]= useState(null)
    const handleChange = (e) => {
        console.log(input.antibodies)
        if(input.antibodies === "Yes"){
            input.antibodies = true
        }else {
            input.antibodies = false
        }
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        axios({
            url: `http://localhost:3000/api/users`,
            method: 'POST',
            data: input
        })
        .then((res)=>{
            console.log("inside handle submit response is - ", res)
            setUser({newUserProfile: res.data})
        })
        .catch(console.error)
        console.log(input)
        //Route to preferences page
    }
    return (
<form onSubmit={handleSubmit}>
    <label>What's your first name?</label>
    <input type='text' value={input.firstName} name="firstName" onChange={handleChange}  />

    <label>How old are you?</label>
    <input value={input.age} name="age" type='number' min='18' max='120' onChange={handleChange} />

    <label>Where do you live?</label>
    <input type='text' value={input.location} name="location" onChange={handleChange}  />

    <label>What's your gender</label>
    <input type="text" value={input.gender} onChange={handleChange} name="gender" />

    <label>What were your hobbies before COVID-19?</label>
    <input type='text' value={input.hobbiesBefore} name="hobbiesBefore"  onChange={handleChange} />

    <label>What were your hobbies after COVID-19?</label>
    <input type='text' value={input.hobbiesAfter} name="hobbiesAfter"  onChange={handleChange} />

    <label>Got COVID Antibodies?</label>
    <input type='radio' value={input.antibodies} name="antibodies" value="true" id='yes' onChange={handleChange} />
    <label htmlFor='true'>Yes</label>

    <input type='radio' value={input.antibodies} name="antibodies" value="false" id='no' onChange={handleChange} />
    <label htmlFor='false'>No</label>

    <label>Upload a profile image</label>
    <input type="file" value={input.image} name="image"  onChange={handleChange} />
    <button type='submit'>Create Profile</button>
</form>
    )
}

export default RegisterForm;