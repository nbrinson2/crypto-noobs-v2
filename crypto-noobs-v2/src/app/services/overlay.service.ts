import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private overlay: Overlay) { }

  public open() {
    // Returns an OverlayRef (which is a PortalHost)
    const overlayRef = this.overlay.create();

    // Create ComponentPortal that can be attached to a PortalHost
    // const filePreviewPortal = new ComponentPortal(CoinProfileComponent);

    // Attach ComponentPortal to PortalHost
    // overlayRef.attach(filePreviewPortal);
  }

}
