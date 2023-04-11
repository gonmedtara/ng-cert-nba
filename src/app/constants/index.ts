import { Conference, Division, Team } from '../models';

export const CONFERENCES: Conference[] = [
    {
        id: 1, name: 'West'
    }, {
        id: 2, name: 'East'
    }];

export const DIVISIONS: Division[] = [{
    id: 1, name: 'Atlantic', conference: 'East',
}, {
    id: 2, name: 'Central', conference: 'East',
}, {
    id: 3, name: 'Southeast', conference: 'East',
}, {
    id: 4, name: 'Northwest', conference: 'West',
}, {
    id: 5, name: 'Pacific', conference: 'West',
}, {
    id: 6, name: 'Southwest', conference: 'West',
}];

