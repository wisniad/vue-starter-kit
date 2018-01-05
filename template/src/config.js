const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: 'https://jsonplaceholder.typicode.com',
  },
  production: {
    API_URL: 'https://jsonplaceholder.typicode.com',
  },
}

export default config[env]
