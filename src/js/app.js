import Child1 from './Child1';
import Child2 from './Child2';
import _debug from 'debug';
const debug = _debug('app:app');

export default function App(props) {
  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
}
