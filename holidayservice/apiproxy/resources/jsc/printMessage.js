
var path = context.targetRequest.url;
print("path :" + path);

var contentType = context.targetRequest.headers["Content-Type"];
print("Content Type :" + contentType);

print("payload:" + context.targetRequest.body);