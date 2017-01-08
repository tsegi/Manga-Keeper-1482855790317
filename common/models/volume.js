'use strict';

module.exports = function(Volume) {

  Volume.disableRemoteMethod('create', true);				// Removes (POST) /products
  Volume.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Volume.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Volume.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Volume.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Volume.disableRemoteMethod('delete', false);
  Volume.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Volume.disableRemoteMethod('replaceById', true);
  Volume.disableRemoteMethod('replaceOrCreate', true);
  Volume.disableRemoteMethod('upsertWithWhere', true);

  Volume.status = function(cb) {
    cb(null, 'test');
  };
  Volume.remoteMethod(
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
          type: ['Volume'],
          root: true
        }
      ],
      description: 'search by keyword'
    }
  );

};
