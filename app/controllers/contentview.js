var args = arguments[0] || {};

var content = args.model.get('content');//.replace(/(<([^>]+)>)/ig, '');
$.webview.html = content;