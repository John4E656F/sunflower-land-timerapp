module.exports = () => {
  if (process.env.MY_ENVIRONMENT === 'production') {
    return {
      ios: { bundleIdentifier: 'dev.expo.example' },
      android: { package: 'dev.expo.example' },
    };
  } else {
    return {
      ios: { bundleIdentifier: 'dev.expo.example.dev' },
      android: { package: 'dev.expo.example.dev' },
    };
  }
};
