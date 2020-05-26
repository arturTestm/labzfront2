import axios from 'axios';

export default axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '//testm.local.com' : '//partners.testm.com'