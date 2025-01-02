import App from "./App";

function DessertsList(props) {
  const { data } = props;
  
  const dessertsList = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => (
      <li key={dessert.name}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ));

  return <ul>{dessertsList}</ul>;
}

export default DessertsList;
