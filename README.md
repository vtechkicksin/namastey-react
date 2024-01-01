[Watch the Video](https://drive.google.com/file/d/1oax9JoID0jcpDcpzQaOnZHorBH_zcxrn/view?usp=sharing)

# namastey-react

# Structure

Headers

- Logo
- Nav items
  Body
  -Search
  -RestaurantContainer
  -RestaurantCard
  -Img
  -Name of Restaurant,Start Rating, cuisine, delivery TimeRanges.
  Footer
  -Copywrite
  -Links
  -Address
  -Contact

# parcel

- Dev Build
- Local server
- HMR - Hot Module Replacement
- File Watching algorithm - Written in C++
- Caching - Faster builds

# This is a body componnent responsible for looping the data and showing different cards

- The most important concept is to use key whenever we are using map always gives unique key
- Prefered way is to give unique key if in case you don't have unique then go with built-in index parameter in the map function but it's not a good prefered way to use index

const Body = () => {
return (

<div className="body">
<div className="search">Search</div>
<div className="restaurant-container">
{resObj.map((e) => (
<RestaurantCard key={e.info.id} resData={e} />
))}
</div>
</div>
);
};

Two types of Export/import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component } from "path"

# React hooks

(Normal JS utility functions)

- useState() - SuperPowerfull State Variable in react
- useEffect()

- useEffect() : This accepts 2 arguments (callback,[]=>dependency array) & dependency array is not a mandatory argument

This behaives very differently when we not pass dependency array.

- If no dependency array => useEffect is called on every render. (useEffect is called after the component got render)
- If dependency array is passed and it is empty then useEffect is called only for the one time.
- if dependency arrr is [arr] means, we have put something inside dependency array then it is called eveyTime arr is updated

# Two type of routing

1. Client side Routing
2. Server side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (CartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit testing - Testing component in isolation
- Integration testing
- End-To-End Testing

# Setting up testing in our app

- Install React Testing Library
- Installed jest (jest docs)
- Installed babel dependency (jest docs)
- configure babel by creating babel.confif.js and configure
- Configure Parcel config file to disable the default babel transpilation
- Jest -npx jest --init
- Install js DOM library
