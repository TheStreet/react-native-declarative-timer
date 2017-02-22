# react-native-declarative-timer

[![NPM Version](https://img.shields.io/npm/v/react-native-declarative-timer.svg?style=flat)](https://www.npmjs.com/package/react-native-declarative-timer)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-declarative-timer.svg?style=flat)](https://www.npmjs.com/package/react-native-declarative-timer)

---
Declaratively create timers in your components. <a name='top'/>

## Quick Access
* <a href='#install'>Installation</a>
* <a href='#usage'>Usage</a>
* <a href='#properties'>Properties</a>
* <a href='#contributing'>Contributing</a>

## <a name='install'>Installation</a>
---
Install the module with:


```
npm install react-native-declarative-timer --save
```

## <a name='usage'>Usage</a>
---
In your code, simply require/import the module:

```
import Timer from 'react-native-declarative-timer';
```

```
<Timer func={funcToExecute} interval={60} />
```

## <a name='properties'>Properties</a>

| Prop | Description | Default |
|---|---|---|
|**`interval`**|Interval in seconds|1|
|**`func`**|The function to execute every `interval` seconds |`null`|

###### <a href='#top'>Top</a>

## <a name='#Contributing'>Contributing</a>
Feel free to do pull requests if a certain feature you want is missing.  We accept all PR's that are enhancements to the project.

###### <a href='#top'>Top</a>
