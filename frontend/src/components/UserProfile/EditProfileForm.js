import React, {useState} from 'react';

const EditProfileForm = ()=> {
    const [input, setInput] = useState({})
    const handleChange = (e)=> {
        console.log(e.target.value)
    }
    const handleSubmit = (e)=> {
      e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit} className="register-form">
        <label>Edit your first name</label>
        <input
          type="text"
          value={input.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label>Edit your age</label>
        <input
          value={input.age}
          name="age"
          type="number"
          min="18"
          max="120"
          onChange={handleChange}
        />
        <br />
        <label>Where do you live?</label>
        <input
          type="text"
          value={input.location}
          name="location"
          onChange={handleChange}
        />
        <br />
        <label>What's your gender?</label>
        <input
          type="text"
          value={input.gender}
          onChange={handleChange}
          name="gender"
        />
        <br />
        <label>What were your hobbies before COVID-19?</label>
        <input
          type="text"
          value={input.hobbiesBefore}
          name="hobbiesBefore"
          onChange={handleChange}
        />
        <br />
        <label>What were your hobbies after COVID-19?</label>
        <input
          type="text"
          value={input.hobbiesAfter}
          name="hobbiesAfter"
          onChange={handleChange}
        />
        <br />
        <label>Got COVID Antibodies Now?</label>
        <input
          className="radio"
          type="radio"
          value={input.antibodies}
          name="antibodies"
          value="yesAnti"
          id="yes"
          onChange={handleChange}
        />
        <label htmlFor="true" className="radio">Yes</label>
        <input
          classname="radio"
          type="radio"
          value={input.antibodies}
          name="antibodies"
          value="noAnti"
          id="no"
          onChange={handleChange}
        />
        <label htmlFor="false" className="radio">No</label>
        <br />
        <label>Update your Profile Image URL</label>
        <input
          type="text"
          value={input.image}
          name="image"
          onChange={handleChange}
        />
        <br />
        <label>Edit your username</label>
        <input
          type="text"
          value={input.username}
          name="username"
          onChange={handleChange}
        />
        <br />
        <label>Edit your password</label>
        <input
          type="text"
          value={input.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="create-profile-btn" type="submit">
          Edit Profile
        </button>
      </form>
    )
}

export default EditProfileForm