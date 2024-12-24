/** @format */

// run: pm2 start ecosystem.config.js --env production|development --watch
module.exports = {
  apps: [
    {
      name: 'user-service',
      instances: 1,
      script: './src/app.js',
      watch: ['src/api', 'src/services'],
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'src/public'],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
