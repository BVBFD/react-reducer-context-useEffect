export type ImgObjType = {
  sm?: string;
  md?: string;
  lg?: string;
};

export type FormStateType = {
  title?: string;
  desc?: string;
  price: number;
  category?: string;
  tags?: [];
  images?: ImgObjType;
  quantity: number;
};

export type PayloadType = {
  name?: string;
  value?: string;
};

export type FormActionType = {
  type: 'CHANGE_INPUT' | 'ADD_TAG' | 'REMOVE_TAG' | 'INCREASE';
  payload?: PayloadType | null;
};

export const FORM_INITIAL_STATE = {
  title: '',
  desc: '',
  price: 0,
  category: '',
  tags: [],
  images: {
    sm: '',
    md: '',
    lg: '',
  },
  quantity: 0,
};

export const formReducer = (
  state: FormStateType,
  action: FormActionType
): any => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload?.name as string]: action.payload?.value,
      };

    case 'ADD_TAG':
      return {
        ...state,
        tags: state.tags?.filter((tag: string) => tag !== action.payload),
      };

    case 'REMOVE_TAG':
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case 'INCREASE':
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return state;
  }
};
