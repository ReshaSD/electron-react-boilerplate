# Electron-React-Boilerplate + Create-react-application

The purpose of this repository is to check if ERB can work with monorepo. It turns out he can, but of course you need to change the files "a little". While testing - along the way added CRA as an assembly for the WEB. Yes, I saw that in closed ERB tickets there were solutions on how to make a build for the web using webpack (for example https://github.com/electron-react-boilerplate/electron-react-boilerplate/pull/2546), but I was wondering to inject here exactly CRA without ejecting it.

I'm not sure if I will develop this option further, but if it helps someone, you can use it.


To add npm package into monorepo package use this example:
```
yarn workspace @app/components-desktop add electron
```
To add one package into another package use this example:
```
yarn workspace @app/desktop add @app/compinents-desktop
```

Look into the ./package.json - there are script examples to launch basic packages/* scripts
