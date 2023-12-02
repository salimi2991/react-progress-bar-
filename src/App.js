import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Skills } from './Components/Skills/skills';

function App() {
  return (
    <section className='vh-100 '>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">React Progress Bar</h3>
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
