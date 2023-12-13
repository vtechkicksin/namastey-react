const RestaurantCategory = (props) => {
  console.log(props);
  const { title, itemCards } = props.data;
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span>
          {title} - ({itemCards.length})
        </span>
        <span>🔽</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
