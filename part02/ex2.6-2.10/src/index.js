import ReactDOM from 'react-dom';
import App from './components/App';
import { notes } from './shared/notes';

ReactDOM.render(<App notes={notes} />, document.querySelector('#root'));
