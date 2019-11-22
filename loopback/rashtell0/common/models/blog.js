'use strict';

module.exports = function (Blog) {

  //Operation Hooks
  //methods: access, loaded, persist, befor save, after save, before delete, after delete
  Blog.observe('access',function(context, next){
    context.date = new Date();
    next();
  });

  //Remote Hooks
  Blog.afterRemote('findById', function (context, blog, next) {
    blog.modified = new Date();
    next();
  });
  //Remote Hooks
  Blog.beforeRemote("findById", function(context, blog, next){
    context.date = "January";
    next();
  });

  //Use remote method
  Blog.search = function (id, cb) {
    Blog.findById(id, function (err, blog) {
      if (err) return cb("Error", null);
      if (!blog) return cb("Blog not found", null);
      if (blog.id === id) return cb(null, blog.contentHeading);
      return cb(null, null);
    })
  }

  //Create remote method
  Blog.remoteMethod("search", {
    accepts: { arg: 'id', type: 'any' },
    returns: { arg: 'search', type: 'any' }
  });


};
