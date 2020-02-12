# NOTES, THOUGHTS AND REMARKS

Hello :)

I documented my process (notes, resouces, game plan and UI planning) in this [Google Doc](https://docs.google.com/document/d/1G4ktM_NMGH9YWKeMwRHlfTaRlELUgkepBf6Pu5duEpQ/edit?usp=sharing).

The UI was developed in isolation of the Electron app using [Storybook](). You can view it by runnning the command `yarn run storybook` (don't forget to `yarn` if you haven't done so already).

I have a list of things that I could not finish but that I'd still like to implement/improve on, these include:

- Fix devices duplicating on rescan on ScanningView
- Find a way to check if bluetooth is actually available (navigator.bluetooth.getAvailability doesn't know if the bluetooth adapter is offline)
  - Do this on the HomeView
  - If bluetooth goes offline, let user know
- Add the rest of the services and characteristics
- Filter characteristics by service, ie. If I select Battery Service, show me only the applicable characteristics
- Selects in the DetailView should have primary and secondary state to guide user's action, ie. highlight one at a time.
- Add loading state to Button. I tried using mui's CircularProgress but it didn't appear. Needs some css love.
- Add ability to cancel connecting to a device. Sometimes nothing happens and no error is returned.
  - Add device connect timeout too
- Get the animation working on the graphs. Apparently you should just be able to add an animation bool to the XYPlot but it's not animating.
- Disable unknown or unsupported devices (don't allow connect to them)
  - ScanningView/Refactor devices and add fields, isConnecting, isDisabled so that the logic is completely contained in the container.
- Use a snackbar to display error messages (in page error messages aren't great)
- Write unit tests for outstanding modules
  - ScanningView
  - DetailView
  - convertDataViewToUint8Array
  - WebBle (I started writing tests for this, even found an awesome [web-bluetooth-mock](https://github.com/urish/web-bluetooth-mock) but it quickly got hairy so I thought I would focus on the component tests first)
- Write E2E tests using [spectron](https://github.com/electron-userland/spectron)
- Use redux instead of route location state (can be more controlled, more scalable and easier to test with actions)
- Use local fonts
- Add Splash screen
