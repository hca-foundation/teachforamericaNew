const globalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_FORMDATA':
      return { ...state, formData: payload };
    default:
      return state;
  }
};

export default globalReducer;
