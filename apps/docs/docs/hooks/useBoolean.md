12
```jsx
import React from 'react';
import { useBoolean } from '@curry_fe/hooks';

export default () => {
  const { state, toggle, setTrue, setFalse } = useBoolean(true);

  return (
    <div>
      <p>
        Effects：{`${state}`}
        
      </p>
      <p>
        <button type="default" onClick={() => toggle()}>
          Toggle
        </button>
        <button type="danger" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </button>
        <button type="primary" onClick={setTrue}>
          Set true
        </button>
      </p>
    </div>
  );
};

```
