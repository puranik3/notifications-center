# Notification Center
Lightweight and simple notifications library for displaying dismissible notifications in web pages.

## Demo
Open index.html in the browser to try out a demo.

## API
- Include notification-center/css/notifications.css and notification-center/js/notification.js on the web page
- First, call NC.init() and configure where messages need to appear.
```javascript
// Possible values for position are TOP_RIGHT | BOTTOM_RIGHT | BOTTOM_LEFT | TOP_LEFT
NC.init({
    position: NC.POSITION.TOP_RIGHT
});
```
- Call NC.show() to show notification. A notification has a title and a description. It can be dismissed by user by clicking the close button, or auto-dimissed in the duration specified when opening (specified in seconds). The method returns an object with a hide() method. Call it in order to dismiss the notification.
```javascript
// Possible values for type are 'success' | 'info' | 'error'
// This notification will close automatically in 10 seconds
const notification = NC.show({
    type: 'success',
    title: 'Success',
    description: 'New team was added',
    duration: 10
});

// You may also programatically dismiss the notification (additionally user can dismiss it by clicking on the close button)
notification.hide();
```