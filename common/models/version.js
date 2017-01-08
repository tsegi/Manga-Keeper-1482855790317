'use strict';

module.exports = function(Version) {

  Version.disableRemoteMethod('create', true);				// Removes (POST) /products
  Version.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Version.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Version.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Version.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Version.disableRemoteMethod('delete', false);
  Version.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Version.disableRemoteMethod('replaceById', true);
  Version.disableRemoteMethod('replaceOrCreate', true);
  Version.disableRemoteMethod('upsertWithWhere', true);

  Version.disableRemoteMethod('__create__language', false); // PUT
  Version.disableRemoteMethod('__update__language', false); // PUT
  Version.disableRemoteMethod('__destroy__language', false); // PUT

  Version.disableRemoteMethod('__create__volumes', false); // PUT
  Version.disableRemoteMethod('__delete__volumes', false); // PUT
  Version.disableRemoteMethod('__destroyById__volumes', false); // DELETE
  Version.disableRemoteMethod('__updateById__volumes', false); // PUT
  Version.disableRemoteMethod('__link__volumes', false); // PUT
  Version.disableRemoteMethod('__unlink__volumes', false); // PUT
};
