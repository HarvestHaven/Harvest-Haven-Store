<div id="welcome" align="center">

  <h1>
    Harvest Haven Learning App
  </h1>

  __An app for Harvest Haven's Learning Library with offline & mobile support__

  <a href="https://www.harvesthaven.com">
    <img src="./public/images/icons/icon-384x384.png" alt="Extension Boilerplate">
  </a>

</div>

# Getting Started

> Click on the description that best describes you!

### [Customer](#customer)

### [Owner]()

### [Coder](#developer)

# Customer

Hello there valued customer! If you are not very tech savy or you have never used this app before, we are here to help out as best as we possibly can. The Harvest Haven App has been developed with everyone we serve in mind and we want to help everyone to enjoy the same experience as much as possible.

- [__What Is This App?__](#whats-new?)
- [__Features__](#features)
- [__Is My Device Compatible?__](#how-to-install)
- [__How to Install__](#features)
- [__Using the App__](#how-to-install)

## What is this App?

The Harvest Haven App is a special website that can anyone can take with them whether you are on your computer, your tablet or phone. We chose not to go through the hurtles of mobile app development through Google and Apple and have put together something called a 'PWA', that allows us to share the same Harvest Haven experience with both desktop and mobile device users. It also makes it easier for us to keep the app updated and distributed for all. We hope you like it!



## Features

- Take Harvest Haven's full Store Experience with you.
- Watch videos about Grander, food production and health devices on the go.
- Save and download your favorite videos for when you don't have access to the internet.
- Have the ability to share what you have learned with your friends and neighbors in person.

## How To Install

  - [__In-Store__](#how-to-install)
    - [__Scanning The QR Code__](#how-to-install)
  - [__At Home__](#how-to-install)
    - [__Visiting the Website__](#how-to-install)
    - [__Device Helper__](#how-to-install)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper erat non orci cursus, vitae ultricies orci fermentum. Pellentesque aliquam, turpis in dictum auctor, risus ipsum rutrum magna, sit amet hendrerit elit nibh sit amet orci. Praesent aliquam scelerisque quam, vitae mollis nunc. Sed egestas mattis faucibus. Aenean eros arcu, dignissim sit amet dui commodo, sodales luctus dolor. Aenean eget leo neque. Proin pharetra facilisis magna, vitae dapibus arcu euismod a. Cras sem erat, tincidunt a consectetur et, elementum quis nisi. Vivamus vel consectetur dui, a suscipit quam. Suspendisse varius ante consequat neque tempor maximus. 

- [__Mobile__](#how-to-install)
- [__Desktop__](#how-to-install)

Phasellus nec purus porttitor, porttitor nunc non, mollis dui. Donec eleifend risus sed diam imperdiet rhoncus. Praesent pulvinar, dolor a ultrices venenatis, augue diam ornare mi, vitae laoreet elit nisi eu dui. Morbi ut nisi tristique, rhoncus est ut, hendrerit massa. Sed quis purus vestibulum, interdum enim quis, facilisis diam. Sed consequat, ex vel tempor sagittis, turpis eros consectetur justo, et rutrum nunc augue eu massa.

##### [[back to Customer]](#New-Customer)

## Device Install Guides

  - [__Mobile__](#how-to-install)
    - [__iPhone__](#how-to-install)
      - [__Safari__](#how-to-install)
      - [__Chrome__](#how-to-install)
      - [__Firefox__](#how-to-install)
    - [__Android__](#how-to-install)
      - [__Chrome__](#how-to-install)
      - [__Firefox__](#how-to-install)

##### [[back to Customer]](#New-Customer)

---


# Developer

__This is the [developer]() section and is NOT for the faint of heart or for our valued customers. If you are one of these, click here to [go back to safety!](#customer)__

---

> __Note for all developers:__ If you are having trouble of any kind, tag [Braden](https://github.com/Braden-Preston) or [Michael](https://github.com/MikePreston17) or submit an issue to the [repo](https://github.com/HarvestHaven/Harvest-Haven-Store/issues).

### Navigation

- [__Basic Information__](#basic-information)
- [__Development Tools__](#development-tools)
- [__Quick Start__](#quick-start)
- [__Required Features__](#development)
- [__Package Purposes__](#development)

---

## Basic Information

This application is a PWA (Progressive Website Application) that is developed in JavaScript using the Node Framework. It employs a serverless stack that is most closely aligned with the MERN stack.

It was boostrapped with [Create React App 2.0](https://facebook.github.io/create-react-app/). CRA has been rewired so that its configuration is  accessible by [craco](https://www.npmjs.com/package/@craco/craco), This allows us to tweak and add additional functionality into the default Webpack configuration. [Webpack](https://webpack.js.org/) in CRA is responsible for bundling, linting, shaking and splitting code for making the app as lightweight as possible.

The PWA also employs an experimental service worker using Google's [Workbox](https://developers.google.com/web/tools/workbox/) to enable offline support for users where it is possible. Offline satisfied by [IndexedDB](https://caniuse.com/#feat=indexeddb) with fallbacks for [WebSQL](https://caniuse.com/#search=websql), and [LocalStorage](https://caniuse.com/#search=localstorage), depending on the user's device.

> This app is still [experimental](), so some of these features may change as the application or device support changes. Features have been selected to be as future-proof as possible with fallbacks at the expense of bundle size and speed.

---

## Development Tools

TBA

We are using VSCode! :)

##### [[back to Developer Navigation]](#navigation)

---

## Quick Start

Once you have clone the repository from the [repo](https://github.com/HarvestHaven/Harvest-Haven-Store/issues), open the root directory in VSCode. You should have access the `public` and `src` folders. Make sure you are cd'd properly into this directory before you try to run any commands.

We are using [yarn](https://yarnpkg.com/en/) as our package manger, but you may use `npm` or `npx` as desired, just make sure you preprend your command with 'run'.

| Package Manager | Command |
| --- | --- |
| **`yarn`** | `yarn` test |
| **`npm`** | `npm` run test |
| **`npx`** | `npx` run test |

See [Migrating from NPM](https://yarnpkg.com/lang/en/docs/migrating-from-npm/).

---

## Install

This is the first command you should run after cloning the repo. It will build the `node_modules` directory and download all necessary packages needed for development as specified in `package.json`.

## Start

Runs the application in `development` mode but [does not attach the service worker](). This mode is perfect for UI and UX development, but not for adjusting service worker or caching functionality. Run and serve a static [build](#build) for that.

    yarn start

## Build
