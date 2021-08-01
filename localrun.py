from http.server import SimpleHTTPRequestHandler
import socketserver

PORT = 8800

class MyHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        '': 'application/octet-stream',
        '.manifest': 'text/cache-manifest',
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.svg':	'image/svg+xml',
        '.css':	'text/css',
        '.js':'application/x-javascript',
        '.wasm': 'application/wasm',
        '.json': 'application/json',
        '.xml': 'application/xml',
    }

with socketserver.TCPServer(('', PORT), MyHandler) as httpd:
    print('Serving at port', PORT)
    httpd.serve_forever()
