/*global define*/
define({
    account : {
        login: '<%= apiUrl %>/token',
        createAccount :  '<%= apiUrl %>/users',
        getUser :  '<%= apiUrl %>/user'
    },
    application : {
        user : '<%= appUser %>',
        password : '<%= appPass %>'
    }

});