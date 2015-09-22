module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify-wsync');

  grunt.initConfig({
     shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
          api_key: "##########################",
          password: "##########################",
          url: "#########.myshopify.com",
          base: 'theme/',
          theme: '##### dev theme id#####',
          sync: '##### live theme id#####'
        }
    },

    watch: {
      shopify: {
        files: ['theme/**'],
        tasks: ["shopify"]
      }
    }
  });

  grunt.registerTask('default', ['shopify']);
};