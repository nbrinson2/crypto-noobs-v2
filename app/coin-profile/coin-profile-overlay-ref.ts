import { OverlayRef } from '@angular/cdk/overlay';

export class CoinProfileOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
