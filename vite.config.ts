import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	define: {
		'process.env': {}
	},
	plugins: [reactRefresh(), tsconfigPaths()]
});
