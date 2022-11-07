const { useState } = React;

const App = () => (
  <div>
    <h3>My Grocery List</h3>
    <GroceryList items = {['Cucumbers', 'Kale']} />
  </div>
);

const GroceryList = (props) => {
  return (
      <ul>
        {props.items.map((item) => (
          <GroceryListItem item={item} />
        ))}
      </ul>
  )
};

const GroceryListItem = (props) => {
  const [isHoveredOver, setIsHover] = useState(false);

  const style = {
    fontWeight: isHoveredOver? 'bold' : 'normal'
  };

  return (
    <li
      style={style}
      onMouseEnter={() => (setIsHover(true))}
      onMouseLeave={() => (setIsHover(false))}
    >
      {props.item}
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

// const Cucumbers = () => {
//   return <li>Cucumbers</li>
// };

// const Kale = () => {
//   return <li>Kale</li>
// };