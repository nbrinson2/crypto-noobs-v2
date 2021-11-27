import { CoinGeckoCoin } from "./coin.types";

export interface CryptoNoobsOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    coin?: CoinGeckoCoin | undefined;
}
