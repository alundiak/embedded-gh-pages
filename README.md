Multi Monitor
===
Online page/platform to show live web pages in automated way. Set of page urls can be set from admin section, and after that client page reloaded.


## Details

### Home page
- `/` home page, main route, where live pages are represented.
- Ideally, would be great to have also screen sharing, as webex/skype/lync/teamviever does. It should be available technology.
- On click defined section (container) it goes full screen, so we can see closer.
- Maybe, with option to schedule page reload, so that iframes/sections reloaded, and we can see ready state of page.


### Admin page
- `/admin` route, where we can set list of urls - by hostname or IP address,
- online pages and apply changes with


## Technical notes
- Remote reload via livereload or websocket or WebRTC
- TODO screen sharing technology.

## Other notes
- GitHub Pages is quick example how to deliver live codding results. And it can be used to incorporate other pages via iframe.
- Would be great to implement github repos scanner for changes, and then trigger reload


## Resources
- https://www.html5rocks.com/en/tutorials/streaming/screenshare/
- https://www.npmjs.com/search?q=screen-sharing
- https://github.com/skyway/skyway-screenshare
- https://github.com/muaz-khan/WebRTC-Experiment/tree/master/screen-sharing
- https://www.npmjs.com/package/iframe-screenshare
