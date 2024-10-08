import react from '@vitejs/plugin-react';

import { 
    defineConfig 
} from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
    return {
        plugins: [
            react(), 
            tsconfigPaths()
        ],
        server: { 
            watch: { 
                usePolling: true 
            } 
        },
        base: './'
    };
});