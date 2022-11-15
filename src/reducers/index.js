import { combineReducers } from 'redux';

import auth from './auth';
import admin from './admin';
import item from './item';
import order from './order'

export const reducers = combineReducers({ auth, admin, item, order });
