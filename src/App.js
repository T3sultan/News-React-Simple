import logo from './logo.svg';
import './App.css';
import { ButtonGroup, Button, Spinner, ButtonToolbar, Card, CardGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';


//api key
// const c =[];
// const number =c.length ===0 ? 5: 10; 


function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=4e64c6fd22a84305a67cbf634f6f2879')
      .then(res => res.json())
      .then(data => setNews(data.articles));

  })
  return (
    <div className="App">

      {

        news.length === 0 ? //add spinner 
          <Spinner animation="border" />
          :
          <Row xs={1} md={2} className="g-4">
            {
              news.map(nw => <News

                key={news.title}
                news={nw}
              >

              </News>)}

          </Row>
      }

    </div>

  );
}

export default App;
