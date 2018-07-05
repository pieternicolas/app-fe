const path = require('path');
const DEV_DIR = path.join(__dirname, 'src');

module.exports = {
	Assets: path.join(DEV_DIR, 'assets/'),
	Utils: path.join(DEV_DIR, 'utils/'),
	Components: path.join(DEV_DIR, 'components/'),
	Controllers: path.join(DEV_DIR, 'controllers/'),
	Containers: path.join(DEV_DIR, 'containers/')
};