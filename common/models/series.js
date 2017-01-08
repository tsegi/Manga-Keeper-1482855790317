'use strict';

module.exports = function(Series) {

  Series.disableRemoteMethod('create', true);				// Removes (POST) /products
  Series.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Series.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Series.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Series.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Series.disableRemoteMethod('delete', false);
  Series.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Series.disableRemoteMethod('replaceById', true);
  Series.disableRemoteMethod('replaceOrCreate', true);
  Series.disableRemoteMethod('upsertWithWhere', true);

  Series.disableRemoteMethod('__create__versions', false); // PUT
  Series.disableRemoteMethod('__delete__versions', false);
  Series.disableRemoteMethod('__destroyById__versions', false); // DELETE
  Series.disableRemoteMethod('__updateById__versions', false); // PUT


  Series.status = function(cb) {
    cb(null, 'test');
  };
  Series.remoteMethod(
    'status', {
      http: {
        path: '/search',
        verb: 'get'
      },
      accepts: [
        {
          arg: 'keyword',
          type: 'string',
          description: 'keyword to search for'
        }
      ],
      returns: [
        {
          arg: 'id',
          type: ['Series'],
          root: true
        }
      ],
      description: 'search by keyword'
    }
  );


};
