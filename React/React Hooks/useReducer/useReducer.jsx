import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
};

// Reducer function 
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

//   dispatcher function which tells what action is to be performed by reducer function
  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  //   dispatcher function which tells what action is to be performed by reducer function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state);
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={state.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
