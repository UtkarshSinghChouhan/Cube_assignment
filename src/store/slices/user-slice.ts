import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/interfaces';
import { Theme } from '../../models/enums';
import { ThemeVariant } from '../../models/types';

interface IAllUser {
  theme : Theme
}

const initialState: IAllUser = {
  theme: Theme.DARK
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeVariant>) => {
        state.theme = action.payload;
    }
  },
});

export const { setTheme } = userSlice.actions;

export default userSlice.reducer;
