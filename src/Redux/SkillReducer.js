
import { createSlice } from '@reduxjs/toolkit';

const SkillReducer = createSlice({
  name: 'skill',
  initialState: {
    currentSkill: 'Skills',

  },
  reducers: {
    setSkill: (state, action) => {
      state.currentSkill = action.payload;
    },
  },
  
});

export const { setSkill } = SkillReducer.actions;

export default SkillReducer.reducer;