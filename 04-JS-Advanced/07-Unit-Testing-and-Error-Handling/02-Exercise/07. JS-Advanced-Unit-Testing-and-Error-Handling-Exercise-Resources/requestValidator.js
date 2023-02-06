function requestValidator(requestObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUri = /^(((ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*))?(\/?)(\{?)([a-zA-Z0-9\-\.\?\,\'\/\\\+\~\{\}\&%\$#_]*)?(\}?)(\/?)$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = /^[^<>\\&'"]*$/g;
    if (!requestObj.method || !validMethods.find(element => element === requestObj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!requestObj.uri || !validUri.test(requestObj.uri) || requestObj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!requestObj.version || !validVersions.find(element => element === requestObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!requestObj.hasOwnProperty('message') || !validMessage.test(requestObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return requestObj;
}


requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});