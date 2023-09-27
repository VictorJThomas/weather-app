import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

export const rootReducer = combineReducers({
    weather: weatherReducer,
})
