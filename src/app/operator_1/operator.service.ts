import { Injectable } from '@angular/core';

import { Operator } from './operator';
import { OPERATORS } from './mock-operators';

@Injectable()
export class OperatorService {
    getOperatorSimple(): Operator[] {
        return OPERATORS;
    }

    getOperators(): Promise<Operator[]> {
    return Promise.resolve(OPERATORS);
  }

    getOperator(id: number): Promise<Operator> {
        return this.getOperators()
            .then(operators => operators.find(operator => operator.id === id));
    }
}
