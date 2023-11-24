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

# example
Client-Side Routing:

What it is: Imagine your web browser as a smart tour guide. With client-side routing, the guide (your browser) has a map (your app) and can show you different places (pages) without asking the headquarters (server) for directions each time.
How it works: When you click on a link or type a new address, the browser cleverly loads the destination page without reloading the entire guidebook (the entire webpage).
Advantages: It feels faster because you get updates without waiting for the guide to call the headquarters each time. It's like flipping through pages in a book rather than asking someone to read each page to you.
Server-Side Routing:

What it is: Now, imagine a traditional library. You ask the librarian (server) for a book (page), and they hand it to you. If you want a different book, you ask again, and the librarian hands you a new one.
How it works: When you click a link, your browser asks the server for the new page. The server then sends the entire page back to your browser, replacing the current one. It's like getting a new book every time you want to read something different.
Advantages: The server has complete control over what you see, ensuring you always get the latest and most accurate information. It's like having a librarian who knows everything and can give you the most updated books.
