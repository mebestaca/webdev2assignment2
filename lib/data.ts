/**
 * 
 * 
 * 
 * 
 */

export type Student = {
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    grade: string
}

export const students : Student[] = [
    {
        id: "A001",
        firstName: "Marc Edison",
        lastName: "Estaca",
        dateOfBirth: new Date("1994-04-15"),
        grade: "A+"
    },
    {
        id: "A002",
        firstName: "Reiner Justin",
        lastName: "Realica",
        dateOfBirth: new Date("1998-03-28"),
        grade: "A+"
    },
    {
        id: "A003",
        firstName: "Joshua",
        lastName: "Dyck",
        dateOfBirth: new Date("2003-01-03"),
        grade: "A+"
    },
    {
        id: "A004",
        firstName: "John",
        lastName: "Endfield",
        dateOfBirth: new Date("2000-06-26"),
        grade: "A+"
    },
    {
        id: "A005",
        firstName: "Jane",
        lastName: "Hypergryph",
        dateOfBirth: new Date("1995-08-15"),
        grade: "A+"
    }
]