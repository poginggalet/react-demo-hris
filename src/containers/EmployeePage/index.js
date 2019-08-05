import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEmployees, updateEmployee } from '../../actions';
import './styles.css';
import { EmployeeTable } from '../../components';


class EmployeePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            onView: false
        }
    }

    componentDidMount() {
        this.props.readEmployees();
        console.log("ERROR", this.props.error);
        console.log("INFO", this.props.employeeInfo);
        // this.setState({
        //     employees: this.props.employees
        // })
    }

    handleUpdateForm() {
        console.log("inside onEdit");
                this.setState({
                    onView: false,
                    onEdit: true
         })
    }
   
    renderData() {
        const employeeItem = this.props.employees.map(({ _id, personalDetails, jobDetails, benefitsDetails }) => {
            return (
                <div key={_id} className="employee-card">
                    <div> {`${personalDetails.firstName} ${personalDetails.lastName}`} </div>
                    <div> {jobDetails.employeeNumber} </div>
                    <div> {jobDetails.title} </div>
                    {/* View */}
                    <button onClick= {() => {
                        this.setState({
                            onView: true
                        }) 
                    }}> View </button>
                    {/* Delete */}
                    <button onClick={() => { console.log("Delete") }}> Delete </button>
                    {
                        this.state.onView ?
                        <EmployeeTable
                           personalDetails={personalDetails}
                           jobDetails={jobDetails}
                           benefitsDetails={benefitsDetails} 
                           onUpdateForm={this.handleUpdateForm.bind(this)}
                        />
                        : null
                    }
                    {
                        this.state.onEdit ? this.renderForm(personalDetails,jobDetails,benefitsDetails) : null
                    }
                </div>
            );
        });
        return employeeItem;
    }

    renderForm(personalDetails,jobDetails,benefitsDetails) {
        return (
            <form>
                <label>
                    <input type="text" placeholder={personalDetails.firstName}/>
                    <input type="text" placeholder={personalDetails.middleName}/>
                    <input type="text" placeholder={personalDetails.lastName}/>
                    <input type="text" placeholder={personalDetails.gender}/>
                    <input type="text" placeholder={`${personalDetails.address.unitNumber} ${personalDetails.address.street} ${personalDetails.address.city} ${personalDetails.address.province} ${personalDetails.address.region} ${personalDetails.address.zipCode} `}/>
                    <input type="text" placeholder={personalDetails.contact.landlineNumber}/>
                    <input type="text" placeholder={personalDetails.contact.mobileNumber}/>
                    <input type="text" placeholder={personalDetails.contact.email}/>
                    <input type="text" placeholder={jobDetails.title}/>
                    <input type="text" placeholder={jobDetails.employeeNumber}/>
                    <input type="text" placeholder={jobDetails.location}/>
                    <input type="text" placeholder={jobDetails.department}/>
                    <input type="text" placeholder={jobDetails.salary}/>
                    <input type="text" placeholder={benefitsDetails.SSS}/>
                    <input type="text" placeholder={benefitsDetails.PhilHealth}/>
                    <input type="text" placeholder={benefitsDetails.PAGIBIG}/>
                    <input type="text" placeholder={benefitsDetails.BIR}/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        ); 
  }


    render() {
        return (
            <div>
                <div className="employee-art">
                    <img src={require('../../assets/employee.png')} />
                </div>
                <div className="employee-list">
                    {this.renderData()}
                </div>
            </div>

        );
    }
}

const mapStatetoProps = ({ employee }) => {
    const { employees, error, employeeInfo } = employee;

    return {
        employees, error, employeeInfo
    }
}


export default connect(mapStatetoProps, { readEmployees })(EmployeePage);
