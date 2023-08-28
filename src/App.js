import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './Components/Home.page'
import { RQSuperHeroesPage } from './Components/RQSuperHeroes.page'
import { SuperHeroesPage } from './Components/SuperHeroes.page'
import { QueryClient, QueryClientProvider } from 'react-query';

// Initialze the client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
        </Routes>
      </div>
    </QueryClientProvider>


  )
}

export default App