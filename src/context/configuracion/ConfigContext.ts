import { createContext } from 'react';
import { SettingsType } from '../../entities';

export interface ConfigInterfaceContext {
	configuracion?: SettingsType;
	obtenerConfiguracion?(): void;
}

export const initialValuesStateConfig: ConfigInterfaceContext = {};

const ConfigContext = createContext(initialValuesStateConfig);

export default ConfigContext;
