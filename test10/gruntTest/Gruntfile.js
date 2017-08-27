module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                //stripBanners: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: [{
                    src: 'js/index.js',
                    dest: 'build/index.min.js'
                }, {
                    src: 'js/index.js',
                    dest: 'build/main.min.js'
                }],
            }
        },
        concat: {
            bar: {
                src: ['build/*.js'],
                dest: 'dest/all.min.js',
            }
        },
        watch:{
            files:['js/index.js'],
            tasks:['uglify','concat']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify','concat','watch']);

};
