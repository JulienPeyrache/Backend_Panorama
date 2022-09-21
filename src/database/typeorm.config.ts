import { DataSource } from 'typeorm';
import ormConfigOptions from './typeormoptions.config';

const ormConfig: DataSource = new DataSource(ormConfigOptions);

export default ormConfig;
