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
    },
    assets : {
        assetBase : 'https://s3-us-west-1.amazonaws.com/morselapp/'
    },
    bingApiKey : 'At3aMJOBaA-KY8yiTNsWGYjAotk8KvAjqY6FmNgonCC0GwQwip2xpoHx7R6CETIh'


});