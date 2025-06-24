# Javascript Count

### Simple and lightweight Javascript character counter for input elements.

### Demo

Demo can be seen [here](https://robiveli.github.io/js-count/).

### Install

```console
npm install js-count --save
```

### Usage

Just include required JavaScript:

```html
<script src="js-count.min.js"></script>
```

or

```js
import jCount from 'jCount';
```

Initialize it:

```html
<input class="input" type="text" />
<div class="count"></div>

<script>
    const myInputCounter = new jCount({
        inputElement: document.querySelector('.input'),
        countElement: document.querySelector('.count'),
    });
</script>
```

No stylings included, just style it as you wish, see options below.

### Options

jCount can take an optional parameter - an [Object] of key/value settings:

| Name              | Required | Type       | Default   | Description                                                                                                                                   |
| ----------------- | -------- | ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| inputElement      | true     | [Element]  | null      | [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) of input element                                                          |
| countElement      | true     | [Element]  | null      | [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) of counter element                                                        |
| loadOnInit        | false    | [boolean]  | true      | Should count characters on load                                                                                                               |
| minCount          | false    | [number]   | 0         | Minimum characters allowed in `inputElement`                                                                                                  |
| maxCount          | false    | [number]   | 0         | Maximum characters allowed in `inputElement`                                                                                                  |
| onInput(callback) | false    | [function] | undefined | Callback (function) to execute on every input event. It returns object: { count: [number], inputElement: [Element], countElement: [Element] } |

### Browser support

Works in every modern browser.

### License

js-count is licensed under the [MIT license](http://opensource.org/licenses/MIT).
