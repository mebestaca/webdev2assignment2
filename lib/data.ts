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
        dateOfBirth: new Date("2008-01-01"),
        grade: "A+"
    },
    {
        id: "A002",
        firstName: "Reiner Justin",
        lastName: "Realica",
        dateOfBirth: new Date("2008-01-02"),
        grade: "A+"
    },
    {
        id: "A003",
        firstName: "Joshua",
        lastName: "Dyck",
        dateOfBirth: new Date("2008-01-03"),
        grade: "A+"
    },
    {
        id: "A004",
        firstName: "John",
        lastName: "Endfield",
        dateOfBirth: new Date("2008-01-04"),
        grade: "A+"
    },
    {
        id: "A001",
        firstName: "Jane",
        lastName: "Hypergryph",
        dateOfBirth: new Date("2008-01-05"),
        grade: "A+"
    }
]