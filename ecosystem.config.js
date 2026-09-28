module.exports = {
  apps: [
    {
      name: "portfolio",
      cwd: "/var/www/portfolio",
      script: "npm",
      args: "start -- -H 127.0.0.1",
      env: {
        NODE_ENV: "production"
      },
      autorestart: true,
      watch: false
    }
  ]
};
