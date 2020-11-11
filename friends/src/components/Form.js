import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
}


.form {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    margin: 2%; 
    width: 25%
}

.form > * {
    margin: 1%; 
}


`;

const Form = ({onInputChange, information, onFormSubmit}) => {




  return (
    <StyledForm>
      <form onSubmit={onFormSubmit} className="form">
        <input onChange={onInputChange} value={information.username} type="text" name="username" />
        <input onChange={onInputChange} value={information.password} type="text" name="password" />
        <button type="submit">Login!</button>
      </form>

      <h1> {"Lambda School  and  i<3Lambd4"} </h1>
    </StyledForm>
  );
};

export default Form;
