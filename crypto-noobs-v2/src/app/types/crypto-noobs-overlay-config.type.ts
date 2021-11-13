export interface CryptoNoobsOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    image?: Image | undefined;
}

export interface Image {
    name: string;
    url: string;
}

