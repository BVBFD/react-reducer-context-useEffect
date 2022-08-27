import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context/Context';
// import { formReducer, FORM_INITIAL_STATE } from '../Reducers/FormReducer';
// import { postReducer, POST_INITIAL_STATE } from '../Reducers/PostReducer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 1rem;
`;

const Span = styled.span`
  font-size: 1.4rem;
`;

const Form = () => {
  // const [formState, formDispatch] = useReducer(formReducer, FORM_INITIAL_STATE);
  // const [postState, postDispatch] = useReducer(postReducer, POST_INITIAL_STATE);

  // ContextAPI
  const { loading, error, post, dispatch } = useContext(Context);

  const handleClick = () => {
    // ContextAPI
    dispatch &&
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: { post: { time: 'is money' } },
      });

    // formDispatch({ type: 'INCREASE' });
    // postDispatch({
    //   type: 'FETCH_SUCCESS',
    //   payload: { post: { time: 'is money' } },
    // });
  };

  // console.log(formState);
  // console.log(postState);

  // ContextAPI
  console.log(loading, error, post);

  return (
    <Container>
      <Link
        style={{
          marginBottom: '12px',
        }}
        to={'/post'}
      >
        Go to Posts
      </Link>
      <Button onClick={handleClick}>
        <Span>Form</Span>
      </Button>
    </Container>
  );
};

export default Form;
