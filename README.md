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
