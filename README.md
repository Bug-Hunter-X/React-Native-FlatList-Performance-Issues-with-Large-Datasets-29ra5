# React Native FlatList Performance Issue with Large Datasets

This repository demonstrates a common performance problem encountered when using the `FlatList` component in React Native with large datasets. The initial implementation causes the app to crash or become extremely slow due to inefficient rendering. The solution implements virtualization techniques to improve performance significantly. 

## Problem
Rendering a large number of items in a `FlatList` without optimization will lead to performance issues.  The `FlatList` attempts to render all items at once, causing memory exhaustion and app crashes, or severe lag and unresponsiveness.

## Solution
The solution uses `windowSize` and `initialNumToRender` props to control how many items are rendered at a time.  This improves performance by only rendering items visible on the screen and a small buffer around them.  Further optimization is achieved with memoization or other performance improvement techniques depending on the complexity of the rendered item.