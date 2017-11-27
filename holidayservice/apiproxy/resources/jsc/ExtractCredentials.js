var client_id = context.getVariable("request.queryparam.client_id")
var client_secret = context.getVariable("request.queryparam.client_secret");
var response_type = context.getVariable("request.queryparam.response_type");
var redirect_uri = context.getVariable("request.queryparam.redirect_uri");
context.setVariable("client_id", client_id);
context.setVariable("client_secret", client_secret);
context.setVariable("response_type", response_type);
context.setVariable("redirect_uri", redirect_uri);