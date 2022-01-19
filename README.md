# Multitouch Joystick for React-native

[![npm](https://img.shields.io/npm/v/multitouchjoystick.svg)](https://npmjs.org/package/multitouchjoystick)
[![downloads](https://img.shields.io/npm/dm/multitouchjoystick.svg)](https://npmjs.org/package/multitouchjoystick)

# Table Of Contents

<details>

- [Install](#install)
- [Usage](#usage)
- [Props](#props)
  - [`onValue`](#onvalue)
- [Contributing](#contributing)

</details>

## Install

```bash
npm install multitouchjoystick
```

```bash
npm install react-native-reanimated@2.3.1
```

```bash
npm install react-native-gesture-handler@2.2.0
```

---

## Usage

Import it the way you want into your project :

```javascript
// import module
import Joystick from "multitouchjoystick";
```

##### Single Stick

```javascript
// render
<Joystick
  resetOnRelease={true}
  autoCenter={true}
  onValue={(x, y) => {
    // values are between -1 and 1
    console.log(x, y);
  }}
/>
```

##### Dual Stick

```javascript
// render
<View
  style={{
    justifyContent: "space-around",
    alignItems: "center",
  }}
>
  <Joystick
    onValue={(x, y) => {
      // values are between -1 and 1
      console.log(x, y);
    }}
  />
  <Joystick
    onValue={(x, y) => {
      // values are between -1 and 1
      console.log(x, y);
    }}
  />
</View>
```

## Props

You can configure your joystick in react-native props :
(All options are optional)

```javascript
    backgroundColor: String,    // Wrapper color. Default rgba(255, 255, 255, 1)
    ballColor: String,          // Handler circle color. Default rgba(0, 0, 256, 0.5)
    ballRadius: Number,         // Handler circle size. Default: 30
    height: Number,             // height wrapper. Default: 200
    width: Number,              // width wrapper. Default: 200
    onValue: Function           // callback: returned values (x:Float ,y: Float)
```

#### `onValue`

> Returned the position values.

Is triggered when axis changed. "x" and "y" values are between -1 and 1.

---

## Contributing

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.
