import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';

/**
 * @interface PropsInterface
 */
interface PropsInterface {

}

/**
 * @interface StateInterface
 */
interface StateInterface {

}

export default class App extends React.Component<PropsInterface, StateInterface> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render(): JSX.Element {
        return (
            <React.Fragment />
        );
    }
}