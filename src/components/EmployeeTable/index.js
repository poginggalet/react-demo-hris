import React from 'react';



const EmployeeTable = (({personalDetails, jobDetails, benefitsDetails, onUpdateForm})=>{
        return (
            <div>
            <div>
                <h3> PERSONAL DETAILS</h3>
                <ul>
                    <li>First Name {personalDetails.firstName} </li>
                    <li> Middle Name {personalDetails.middleName}</li>
                    <li> Last Name {personalDetails.lastName}</li>
                    <li> Gender {personalDetails.gender}</li>
                    <li> Title {personalDetails.titile}</li>
                    <li> Address {`${personalDetails.address.unitNumber} ${personalDetails.address.street} ${personalDetails.address.city} ${personalDetails.address.province} ${personalDetails.address.region} ${personalDetails.address.zipCode} `}</li>
                </ul>
            </div>
            <div>
                <h3> CONTACT DETAILS</h3>
                <ul>
                    <li> Landline {personalDetails.contact.landlineNumber}</li>
                    <li> Mobile Number {personalDetails.contact.mobileNumber}</li>
                    <li> Email {personalDetails.contact.email}</li>
                </ul>
            </div>
            <div>
                <h3> JOB DETAILS</h3>
                <ul>
                    <li> Title {jobDetails.title}</li>
                    <li> Employee Number {jobDetails.employeeNumber}</li>
                    <li> Location {jobDetails.location}</li>
                    <li> Department {jobDetails.department}</li>
                    <li> Salary {jobDetails.salary}</li>
                </ul>
            </div>
            <div>
                <h3> EMPLOYEE BENEFITS </h3>
                <ul>
                    <li> SSS {benefitsDetails.SSS}</li>
                    <li> PhilHealth{benefitsDetails.PhilHealth}</li>
                    <li> PAGIBIG {benefitsDetails.PAGIBIG}</li>
                    <li> BIR {benefitsDetails.BIR}</li>
                </ul>
            </div>
            {
                // this.state.onEdit ? 
                // <div>
                //     {this.renderForm(personalDetails,jobDetails,benefitsDetails)}
                // </div> : null
            }
            <button onClick= {onUpdateForm}> Update </button>
        </div>

        );
})

export { EmployeeTable };