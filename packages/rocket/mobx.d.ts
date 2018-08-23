import { IObservableValue } from 'inferno';
export { computed, observable, IObservableValue, autorun, toJS } from 'mobx';
export { Provider } from 'mobx-react';
import RocketComponent from './RocketComponent';
import { Component } from 'react';
export declare const inject: (...stores: string[]) => (target: any) => any;
export declare function boxed<T>(initial: T): IObservableValue<T>;
export declare function observer(component: RocketComponent<any> | Component<any>): any;
export declare const unboundAction: any;
export declare const action: any;
