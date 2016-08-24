module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'unitflash',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
