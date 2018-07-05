import axios from 'axios';

export default () => {
	axios.defaults.baseURL = 'https://backend-pieternicolas.c9users.io:8081/';
};