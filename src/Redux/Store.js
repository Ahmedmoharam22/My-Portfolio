import { configureStore } from '@reduxjs/toolkit';
import SkillReducer from './SkillReducer';

const Store = configureStore({
  reducer: {
    SkillReducer,
  },
});

export default Store;

