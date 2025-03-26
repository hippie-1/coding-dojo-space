import * as fs from 'node:fs';
import { Config } from '../../util/Config.js';

export class Accounting {

    static savePaidOrder(order) {
        if (order.status == 'eatenAndPaid') {
            let content = JSON.stringify(order) + '\n';
            fs.appendFile(Config.getPaidOrdersPath(), content, (err) => {
                if (err) {
                  console.error('Error appending to file:', err);
                  return;
                }
                console.log('Content appended successfully!');
              })
        }
    }

}