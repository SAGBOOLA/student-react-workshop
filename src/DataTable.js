import React, { useEffect, useState } from 'react';

const DataTable = () => {

    const initialState = [
        {
            id: 1,
            firstName: 'Shade',
            lastName: 'Briggs',
            age: 32,
            birthDate: '1990-05-15',
            country: 'USA',
            city: 'California'
        },
        {
            id: 2,
            firstName: 'Tunde',
            lastName: 'Odusanya',
            age: 40,
            birthDate: '1982-03-09',
            country: 'Canada',
            city: 'Ontario'
        },
        {
            id: 3,
            firstName: 'Feyisayo',
            lastName: 'Onas',
            age: 20,
            birthDate: '2002-09-03',
            country: 'UK',
            city: 'London'
        }
    ];

    const [studentList, setStudentList] = useState(initialState);
    const [showDetails, setShowDetails] = useState(false);
    const [student, setStudent] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        age: 0,
        birthDate: '',
        country: '',
        city: ''
    });
    

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    };

    const TableAction = (props) => {
        const showContent = () => {
            setStudent(props.student);
            setShowDetails(true);
        };

        return (
            <button type='button' className='btn btn-primary' onClick={showContent}>Details</button>
        );
    };

    const TableRow = (props) => {
        const [tableData, setTableData] = useState([]);
        useEffect( () => {
            setTableData(props.content);
        } , []);

        return (
            <tbody>
                {tableData.map((student) => {
                    const data = (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                            <td><TableAction student={student} /></td>
                        </tr>
                    );
                    return data;
                })}
            </tbody>
        );
    };


    const ShowStudentDetails = () => {
        const hideDetails = () => {
            setStudent({});
            setShowDetails(false);
        };


        return (
            <>
             <br />
             {showDetails && (
                 <div className='card'>
                     <div className='card-header bg-info text-white'>
                         Student Information
                     </div>
                     <div className='card-body'>
                         <h4 className='card-title'>{student.country}, {student.city}</h4>
                         <p className='card-text'>Id: {student.id}</p>
                         <p className='card-text'>Name: {student.firstName} {student.lastName}</p>
                         <p className='card-text'>BirthDate: {student.birthDate}</p>
                     </div>
                     <div className='card-footer'>
                         <button type='button' className='btn btn-outline-info text-info' onClick={hideDetails}>Hide</button>
                     </div>
                 </div>
               )}
               <br />
            </>
        );
    }



    return (
        <div className='container shadow mt-4 border'>
            <h3>Student List</h3>
            <table className='table table-striped table-bordered'>
                <TableHeader />
                <TableRow content={studentList} />
            </table>
            <div className='w-25 mx-auto'>
                <ShowStudentDetails />
            </div>
        </div>
    );
};

export default DataTable;