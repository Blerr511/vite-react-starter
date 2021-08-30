import { AppEnv } from '@typings/app.types';

export class Config {
	public readonly APP_ENV = new AppEnv(import.meta.env.MODE);
}
