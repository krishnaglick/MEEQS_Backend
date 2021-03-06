/**
 * sessionAuth
 *
 * @module      :: Policy
 * @auth system :: PassportJS
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.isAuthenticated()) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden({message: 'Unauthorized'});
};
