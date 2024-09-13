设置页面加载后自动执行  fetchData 方法
ChatGPT said:
ChatGPT
要在页面加载后自动执行 fetchData 方法，你可以在 React 组件中使用 useEffect 钩子。useEffect 钩子可以在组件挂载（即页面加载）时执行某些副作用操作。在这个情况下，我们可以使用 useEffect 钩子在组件加载时自动调用 fetchData 方法。

1. 更新 TablePage.js 组件
在 TablePage.js 中，你可以将 fetchData 方法调用放入 useEffect 钩子中，以便在组件加载时自动执行。这样用户在首次加载页面时会自动看到数据加载和表格展示

结
使用 useEffect 钩子：在组件加载时自动调用 fetchData 方法。
定义数据加载函数：处理数据请求、状态更新和错误处理。



点击查询按钮后ajax加载数据，并绑定到table

  <button onClick={fetchData}>Load Data</button> {/* 点击按钮时调用 fetchData */}

  fetchData会ajax调用数据，并set data...data自动与组件绑定的，会自动刷新data