import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/interfaces';
import { Theme } from '../../models/enums';
import { ThemeVariant } from '../../models/types';

interface IAllUser {
  users : Array<IUser> | null,
  theme : Theme
}

const initialState: IAllUser = {
  users : null,
  theme: Theme.LIGHT
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<IUser>>) => {
      if(state.users){
        state.users = [...state.users, ...action.payload]        
      }else{        
        state.users = [...action.payload]
      }
    },
    setTheme: (state, action: PayloadAction<ThemeVariant>) => {
        state.theme = action.payload;
    }
  },
});

export const { setUsers, setTheme } = userSlice.actions;

export default userSlice.reducer;
