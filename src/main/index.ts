import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from "url";

/*
 * Enable the web bluetooth api on linux
 */
if (process.platform === "linux") {
  app.commandLine.appendSwitch(
    "enable-experimental-web-platform-features",
    "true"
  );
}

/*
 * Enable the web bluetooth api in general
 */
app.commandLine.appendSwitch("enable-web-bluetooth", "true");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: any;

type BluetoothEventCallback = (deviceId: string) => void;

/*
 * Empty callback to be reassigned later
 */
let callbackForBluetoothEvent: BluetoothEventCallback = () => {}; // eslint-disable-line

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {
  if (process.env.NODE_ENV !== "production") {
    await installExtensions();
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true // to add support for require()
    }
  });

  /*
   * Setup web bluetooth integration
   */
  mainWindow.webContents.on(
    "select-bluetooth-device",
    (
      event: Event,
      deviceList: BluetoothDevice[],
      callback: BluetoothEventCallback
    ) => {
      event.preventDefault();

      /*
       * Make this callback accessible outside of this function
       */
      callbackForBluetoothEvent = callback;

      mainWindow.webContents.send("channelForBluetoothDeviceList", deviceList);
    }
  );

  if (process.env.NODE_ENV !== "production") {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1"; // eslint-disable-line require-atomic-updates
    mainWindow.loadURL(`http://localhost:2003`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }

  if (process.env.NODE_ENV !== "production") {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    mainWindow.webContents.once("dom-ready", () => {
      mainWindow.webContents.openDevTools();
    });
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

/*
 * Cancels discovery
 */
ipcMain.on("channelForTerminationSignal", _ => {
  callbackForBluetoothEvent("");
});

/*
 * Resolves navigator.bluetooth.requestDevice() and stops device discovery
 */
ipcMain.on("channelForSelectingDevice", (event, deviceId) => {
  callbackForBluetoothEvent(deviceId);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
