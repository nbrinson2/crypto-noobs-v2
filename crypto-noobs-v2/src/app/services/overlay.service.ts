import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { CoinProfileOverlayRef } from '../coin-profile/coin-profile-overlay-ref';
import { COIN_PROFILE_DIALOG_DATA } from '../coin-profile/coin-profile-overlay.tokens';
import { CoinProfileComponent } from '../coin-profile/coin-profile.component';
import { CryptoNoobsOverlayConfig } from '../types/crypto-noobs-overlay-config.types';

const DEFAULT_CONFIG: CryptoNoobsOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  coin: undefined
}


@Injectable({
  providedIn: 'root'
})
export class OverlayService {


  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  public open(config: CryptoNoobsOverlayConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an overlayRef which is a portalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new CoinProfileOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    // Subscribe to a stream that emits when the backdrop was clicked
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    // Return remote control
    return dialogRef;
  }

  private getOverlayConfig(config: CryptoNoobsOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private createOverlay(config: CryptoNoobsOverlayConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private createInjector(config: CryptoNoobsOverlayConfig, dialogRef: CoinProfileOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(CoinProfileOverlayRef, dialogRef);
    injectionTokens.set(COIN_PROFILE_DIALOG_DATA, config.coin);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: CryptoNoobsOverlayConfig, dialogRef: CoinProfileOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(CoinProfileComponent, null, injector);
    const containerRef: ComponentRef<CoinProfileComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }
}
