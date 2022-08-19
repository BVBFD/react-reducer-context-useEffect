export type PostStateType = {
  loading?: boolean;
  post?: object;
  error?: boolean;
};

export type PostActionType = {
  type: 'FETCH_START' | 'FETCH_SUCCESS' | 'FETCH_ERROR';
  payload: PostStateType;
};

export const POST_INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state: PostStateType, action: PostActionType) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        loading: true,
        error: false,
        post: {},
      };

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        post: action.payload,
      };

    case 'FETCH_ERROR':
      return {
        error: true,
        loading: false,
        post: {},
      };

    default:
      return state;
  }
};
