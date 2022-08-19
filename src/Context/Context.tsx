import { createContext, useReducer } from 'react';
import {
  PostActionType,
  postReducer,
  POST_INITIAL_STATE,
} from '../Reducers/PostReducer';

// const POST_INITIAL_STATE = {
//   loading: false,
//   post: {},
//   error: false,
// };

type ContextProviderType = {
  loading?: boolean;
  post?: object;
  error?: boolean;
  dispatch?: React.Dispatch<PostActionType>;
};

export const Context: React.Context<ContextProviderType> =
  createContext<ContextProviderType>({});

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(postReducer, POST_INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        error: state.error,
        post: state.post,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
