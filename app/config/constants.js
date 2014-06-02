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
    },
    content : {
        query : '<%= apiUrl%>/content/query',
        content : '<%= apiUrl%>/content',
        contentTypes : '<%= apiUrl%>/contenttypes',
        node : '<%= apiUrl%>/node/'
    }


});