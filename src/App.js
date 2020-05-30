import React from 'react';
import DataService from './services/Data.service';

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      DataService.fetchBooks(),
      DataService.fetchMagazines()
    ]).then(function (valArray) {
      console.log('valArray', valArray);
      const data = valArray[0].concat(valArray[1]);

      data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }

        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });


      setIsLoaded(true);
      setItems(data);
    });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.isbn}>
            <strong>Title:</strong> {item.title}<br />
            <strong>Authors:</strong> {item.authors}<br />
            <strong>Description:</strong> {item["description\r"]}<br />
            <strong>ISBN:</strong> {item.isbn}<br />
            <br/>
            <br/>
          </li>
        ))}
      </ul>
    );
  }
}