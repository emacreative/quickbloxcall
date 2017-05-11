cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-websocket.websocket",
        "file": "plugins/cordova-plugin-websocket/www/websocket.js",
        "pluginId": "cordova-plugin-websocket",
        "clobbers": [
            "WebSocket"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-websocket": "0.12.2",
    "cordova-plugin-device": "1.1.6",
    "cordova-custom-config": "3.2.0"
};
// BOTTOM OF METADATA
});