import './App.css'
import MyForms from './components/forms/MyForms'

function App() {

  return (
    <>
      <MyForms user={ { name: 'Alex', email: 'alex@gmail.com' } } />
    </>
  )
}

export default App
