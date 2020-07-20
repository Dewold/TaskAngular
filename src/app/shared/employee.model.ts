import { Position } from './position.model';

export class Employee {
    Id: number;
    FirstName: string;
    LastName: string;
    Position: Position;
    PositionId: number;
    Salary: number;
    HireDate: Date;
    DismissalDate: Date;
}
