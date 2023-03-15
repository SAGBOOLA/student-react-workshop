import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import DataTable from './DataTable';

const greetingMessage = <div>Welcome to my React Workshop</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataTable />);