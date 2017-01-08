'use strict';

module.exports = function(Author) {
  Author.disableRemoteMethod('create', true);				// Removes (POST) /products
  Author.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Author.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Author.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Author.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Author.disableRemoteMethod('delete', false);
  Author.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Author.disableRemoteMethod('replaceById', true);
  Author.disableRemoteMethod('replaceOrCreate', true);
  Author.disableRemoteMethod('upsertWithWhere', true);

  Author.disableRemoteMethod('__create__volumes', false); // PUT
  Author.disableRemoteMethod('__delete__volumes', false); // PUT
  Author.disableRemoteMethod('__destroyById__volumes', false); // DELETE
  Author.disableRemoteMethod('__updateById__volumes', false); // PUT
  Author.disableRemoteMethod('__link__volumes', false); // PUT
  Author.disableRemoteMethod('__unlink__volumes', false); // PUT


  Author.status = function(cb) {
    cb(null, 'test');
  };
  Author.remoteMethod(
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
          type: ['Author'],
          root: true
        }
      ],
      description: 'search by keyword'
    }
  );

};
