# use-value

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
