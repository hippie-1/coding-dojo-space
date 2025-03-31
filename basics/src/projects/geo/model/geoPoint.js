import { stringToHash } from '../../../../src/util/BasicFunctions.js';
import { Config } from '../../../../src/util/Config.js';

export class GeoPoint {
    name;
    height;

    constructor (name, height) {
        this.name = name;
        this.height = height;
    }

     // compares to an object
    compareTo (obj, key='height') {
        if (!( obj instanceof GeoPoint)) {
            throw new Error('Class cast exception, try with GeoPoint instanse')
        }
        // let keys = Object.keys(this);
        // let keysToBeCompared = keys.find(elementkey => elementkey == key);
        let result = 0;
        if (this[key] > obj[key]) result = 1;
        if (this[key] == obj[key]) result = 0;
        if (this[key] < obj[key]) result = -1;
        return result;
    }

    getHeight () {
        return this.height;
    }

    equals (obj) {
        if (!( obj instanceof GeoPoint)) {
            return false;
        }
        let keys = Object.keys(this);
        for (let i=0; i<keys.length; i++) {
            if (this[keys[i]] !== obj[keys[i]]) {
                return false;
            }
        }
        return true;
    }

    hashCode () {
        let hashCode = this.height + stringToHash(this.name) * 0.0000000000001;
        return hashCode;
    }

    toString (colourCode) {
        return `${this.name}'s height is ${Config.getCustomTemplatingColours(colourCode)} ${this.height}m ${Config.getTemplatingColours('Reset')}.`
    }
}

/* Tests:
const annapurna = new GeoPoint('Annapurna', 8091);
const hashAnnapurna = annapurna.hashCode();
const mountEverest = new GeoPoint('mountEverest', 8848);
const hashMountEverest = mountEverest.hashCode();
// console.log(hashAnnapurna, hashMountEverest);
console.log(annapurna.equals(annapurna));
console.log(annapurna.hashCode() == annapurna.hashCode());
// console.log(annapurna.compareTo(mountEverest));
*/
