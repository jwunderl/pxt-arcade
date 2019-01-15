// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
// force first game engine
game.eventContext()

// Register system menu
scene.systemMenu.register();
// Register system menu on any future scenes
scene.registerNewSceneHandler((s) => scene.systemMenu.register());