import { AppConfigService } from './config.service';
export declare class AppConfigController {
    private appConfigService;
    constructor(appConfigService: AppConfigService);
    getPreSignedUrl(): Promise<{}>;
}
