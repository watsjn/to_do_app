import environment from './base';
const baseApi = 'http://www.production-api.com';
const env = environment(baseApi);
export default {
  ...env,
};
