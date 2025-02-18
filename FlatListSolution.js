The solution addresses the problem by implementing virtualization techniques in the `FlatList` component. By setting the `windowSize` and `initialNumToRender` props, we significantly reduce the number of items rendered at any given time. This is especially important when dealing with thousands or tens of thousands of items.

```javascript
// FlatListSolution.js
import React from 'react';
import { FlatList, Text } from 'react-native';

const data = Array.from({ length: 100000 }, (_, i) => i);

const MyFlatList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item) => item.toString()}
      windowSize={10} // Adjust as needed
      initialNumToRender={20} // Adjust as needed
    />
  );
};

export default MyFlatList;
```