import React from 'react';

export default function ReviewList() {

    return (
        <>
            <th>Review List</th>
            <table>
                <tbody>
                    <tr>
                        <td>This is my body.</td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                    
                    <tr>
                        <td>This is my body.</td> 
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                    <tr>
                        <td>This is my body.</td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                </tbody>
            </table>
        </>
    )
}