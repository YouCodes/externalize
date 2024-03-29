import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Home from './pages/Home'
import Project from './pages/Project'
import NotFound404 from './pages/NotFound404'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients:{
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects:{
          merge(existing, incoming) {
            return incoming;
          }          
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "https://externalize.onrender.com/graphql",
  cache,
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound404 />} />
            </Routes>
          </div>
        </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
