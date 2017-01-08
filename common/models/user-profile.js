'use strict';

module.exports = function(Userprofile) {
  Userprofile.beforeRemote('create', function(ctx, modelInstance, next) {
    ctx.args.data.userId = ctx.req.accessToken.userId;
    next();
  });
};
