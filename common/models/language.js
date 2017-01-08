'use strict';

module.exports = function(Language) {

  Language.disableRemoteMethod('create', true);				// Removes (POST) /products
  Language.disableRemoteMethod('upsert', true);				// Removes (PUT) /products
  Language.disableRemoteMethod('deleteById', true);			// Removes (DELETE) /products/:id
  Language.disableRemoteMethod("updateAll", true);				// Removes (POST) /products/update
  Language.disableRemoteMethod("updateAttributes", false);		// Removes (PUT) /products/:id
  Language.disableRemoteMethod('delete', false);
  Language.disableRemoteMethod('createChangeStream', true);	// removes (GET|POST) /products/change-stream
  Language.disableRemoteMethod('replaceById', true);
  Language.disableRemoteMethod('replaceOrCreate', true);
  Language.disableRemoteMethod('upsertWithWhere', true);

};
