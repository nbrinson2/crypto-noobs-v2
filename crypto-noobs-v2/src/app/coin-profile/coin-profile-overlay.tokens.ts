import { InjectionToken } from '@angular/core';

import { Image } from '../types/crypto-noobs-overlay-config.type';

export const FILE_PREVIEW_DIALOG_DATA = new InjectionToken<Image>('FILE_PREVIEW_DIALOG_DATA');