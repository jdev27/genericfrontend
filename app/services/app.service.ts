import {Config} from '../config/config';

export class AppService {

    getTitle(): string {
        return Config.TITLE;
    }
}