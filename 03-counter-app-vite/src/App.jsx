import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

export const App = () => {


    return (
        <>
            {/* <FirstApp title='Hola Pepe' /> */}
            <CounterApp value={100} />
        </>
    )
}
