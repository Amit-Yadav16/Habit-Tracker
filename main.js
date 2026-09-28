const { app, BrowserWindow, Menu } = require('electron');
app.setAppUserModelId('com.me.habittracker');
if (!app.requestSingleInstanceLock()) app.quit();
let win;
app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({ width: 1280, height: 860, backgroundColor: '#f6f4ee', title: 'Habit Tracker' });
  win.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());
