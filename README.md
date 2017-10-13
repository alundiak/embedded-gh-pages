Multi Monitor
===
Online page/platform to show live web pages in automated way. Set of page urls can be set from admin section, and after that client page reloaded.


## Details
- `/` home page, main route, where live pages are represented. With scheduled reload, so that iframes reloaded, and we can see ready state of page.
- `/admin` route, where we can set list of urls - localhost, LAN hosts, online pages and apply changes with remote reload (via livereload or websocket or WebRTC)


## Technical notes
- GitHub Pages is quick example how to deliver live codding results. And it can be used to incorporate other pages via iframe.
- Would be great to implement github repos scanner for changes, and then trigger reload 
