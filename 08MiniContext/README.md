## Why Context API:
- Here when yoi create an web app and you want some data to transfer like from app to card wher app use dashbord and more component whose sub component is card then we need to pass props to dashbord which actully not needed it so we need something like global object which can be accsesable to app and card so we can use Context Api
- For that we made first folder and js file of context
- Then we need to export useContext
- we need to make  provider like if we have name UserContext:<br>
```jsx
<UserContext>
    <Dashbord>
        <card>
        ...
        </card>
    </Dashbord>

</UserContext>
```
so here both Dashbord and card can accesss UserContext

- Now we can use this so for that we can got to that component and justlike if we want useState from react we write<br>
<br>
```jsx
 import {useState} from react
 ```
<br>
<br>
we can use over UserContext and get global data like:<br>
<br>
