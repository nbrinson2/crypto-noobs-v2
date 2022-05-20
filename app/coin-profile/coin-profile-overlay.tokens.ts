import { InjectionToken } from '@angular/core';
import { CoinGeckoCoin } from '../types/coin.types';

export const COIN_PROFILE_DIALOG_DATA = new InjectionToken<CoinGeckoCoin>('COIN_PROFILE');