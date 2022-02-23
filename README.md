# Cypress Test Cases

### Test suite
  ```
  const initialRoute = 'https://todomvc.com/examples/vanillajs/'
  
  const testOptions = {
    resolutionX: 1920,
    resolutionY: 1080,
  }
```

### Testing data

```
let TODO_ITEM_ONE = 'buy some cheese'
let TODO_ITEM_TWO = 'feed the cat'
```

### Test 1
```
 {
  name: "Test 1",
  steps: () => [
   enterValue(newTodoInputField, TODO_ITEM_ONE),
   pressEnterInInput(newTodoInputField),
   enterValue(newTodoInputField, TODO_ITEM_TWO),
   pressEnterInInput(newTodoInputField),
   assertElementContainsText(todoListItem[0], TODO_ITEM_ONE),
   assertElementContainsText(todoListItem[1], TODO_ITEM_TWO),
   assertElementsInListCount(todoListItem, 2)
], },
```

### Test 2
```
{
  name: "Test 2",
  steps: () => [
    Test1()
    checkElementInList(addTodoPageIds.todoListItem,addTodoPageIds.toggle, 0)
    assertIfElementInListIsToggled(todoListItem[0])
  ]
} ];
```
