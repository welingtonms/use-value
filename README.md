# use-value

[![Coverage Status](https://img.shields.io/coveralls/github/welingtonms/use-value?style=flat-square)](https://coveralls.io/github/welingtonms/use-value)
[![npm package](https://img.shields.io/npm/v/@welingtonms/use-value?style=flat-square)](https://www.npmjs.com/package/@welingtonms/use-value)

A custom React hook that wraps the existing useState to be used similarly to jQuery's [.val()](https://api.jquery.com/val/).

## Usage

```jsx
import { useValue } from '@welingtonms/use-value';

function CollapseSample() {
  const collapsed = useValue(false);

  return (
    <div>
      {collapsed() ? 'ON' : 'OFF'}
      <button
        type="button"
        onClick={() => {
          collapsed(!collapsed());
        }}
      >
        Toggle like this
      </button>
      <button
        type="button"
        onClick={() => {
          collapsed((isCollapsed) => !isCollapsed);
        }}
      >
        Or like this
      </button>
    </div>
  );
}
```
