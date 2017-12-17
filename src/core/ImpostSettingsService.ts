import {ImpostSettings} from "../interfaces/interfaces";

class ImpostSettingsService {
	private settings: ImpostSettings;

	setSettings(settings: ImpostSettings) {
		this.settings = settings;
	}

	getSettings(): ImpostSettings {
		return this.settings;
	}
}

export default new ImpostSettingsService();