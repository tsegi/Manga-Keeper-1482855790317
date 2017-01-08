'use strict';

module.exports = function(Publisher) {

  Publisher.disableRemoteMethod('create', true);				// Removes (POST) /products
  Publisher.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Publisher.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Publisher.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Publisher.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Publisher.disableRemoteMethod('delete', false);
  Publisher.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Publisher.disableRemoteMethod('replaceById', true);
  Publisher.disableRemoteMethod('replaceOrCreate', true);
  Publisher.disableRemoteMethod('upsertWithWhere', true);

  Publisher.disableRemoteMethod('__create__volumes', false); // PUT
  Publisher.disableRemoteMethod('__delete__volumes', false); // PUT
  Publisher.disableRemoteMethod('__destroyById__volumes', false); // DELETE
  Publisher.disableRemoteMethod('__updateById__volumes', false); // PUT
};
