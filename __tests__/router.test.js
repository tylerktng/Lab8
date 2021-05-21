/**
 * @jest-environment jsdom
 */

import { pushToHistory} from "../scripts/router";

describe('router-tests', () => {
    test('default', () => {
        let h = pushToHistory('');
        expect(h.length).toBe(2);
        expect(h.state.page).toBeUndefined();
    });
    test('settings', () => {
        let h = pushToHistory('settings');
        expect(h.length).toBe(3);
        expect(h.state.page).toBe('settings');
    });
    test('entry', () => {
        const entryNum = 1;
        let h = pushToHistory('entry', entryNum);
        expect(h.length).toBe(4);
        expect(h.state.page).toBe(`entry${entryNum}`);
    });
    
});