import { Button, Card, CardFooter, CheckboxControl, Divider } from './components';
import './App.css';

function App() {
	return (
		<>
      <Card>
        <CheckboxControl label={'Page 1'} />

        <Divider />

				<CardFooter>
					<Button width={'100%'}>Done</Button>
				</CardFooter>
			</Card>
		</>
	);
}

export default App;
