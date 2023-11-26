const User = (props) => {
  console.log("props>>>>>>", props);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Allahabad</h3>
      <h4>Contact: @vtechkicksin</h4>
    </div>
  );
};

export default User;
