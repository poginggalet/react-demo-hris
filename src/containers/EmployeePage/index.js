import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEmployees, updateEmployee, createEmployee, deleteEmployee } from '../../actions';
import './styles.css';
import { EmployeeTable } from '../../components';
// import { EmployeeActions } from '../../actions';

class EmployeePage extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.onView = false
        this.onEdit = false
        this.onCreate = false
        this.onDelete = false
        this.state = {
            employees: [],
            onView: false,
            selectedKey : '',
                personalDetails: {
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    gender: '',
                address: {
                    unitNumber: '',
                    street: '',
                    city: '',
                    province: '',
                    region: '',
                    zipCode: ''
                    },
                contact: {
                    landlineNumber: '',
                    mobileNumber: '',
                    email: ''
                    },
                }, 
                jobDetails: {
                    title: '',
                    employeeNumber: '',
                    location: '',
                    department: '',
                    salary: ''
                },
                benefitsDetails: {
                    SSS: '',
                    PhilHealth: '',
                    PAGIBIG: '',
                    BIR:''
                }
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

    handleChange(event) {

    switch(event.target.name){
        case 'fname' :
            return (this.setState({
                personalDetails: {
                    ...this.state.personalDetails,
                    firstName: event.target.value
                }
            }))
        case 'mname' :
           return ( this.setState({
                personalDetails: {
                    ...this.state.personalDetails,
                    middleName: event.target.value
                }
            })) 
        case 'lname' :
            return (this.setState({
                personalDetails: {
                    ...this.state.personalDetails,
                    lastName: event.target.value
                }
            }))
        case 'gender' :
            return (this.setState({
                personalDetails: {
                    ...this.state.personalDetails,
                    gender: event.target.value
                }
            }))
        case 'unitnumber' :
            return (this.setState({
                personalDetails: {
                    ...this.state.personalDetails,
                    address : {
                        ...this.state.personalDetails.address,
                    unitNumber: event.target.value
                    }
                }
            }))
                case 'street' :
                   return ( this.setState({
                        personalDetails: {
                            ...this.state.personalDetails,
                            address : {
                                ...this.state.personalDetails.address,
                            street: event.target.value
                            }
                        }
                    })) 
                case 'city' :
                    return (this.setState({
                        personalDetails: {
                            ...this.state.personalDetails,
                            address : {
                                ...this.state.personalDetails.address,
                            city: event.target.value
                            }
                        }
                    }))
                case 'province' :
                    return (this.setState({
                        personalDetails: {
                            ...this.state.personalDetails,
                            address : {
                                ...this.state.personalDetails.address,
                            province: event.target.value
                            }
                        }
                    }))
                    case 'region' :
                            return (this.setState({
                                personalDetails: {
                                    ...this.state.personalDetails,
                                    address : {
                                        ...this.state.personalDetails.address,
                                    region: event.target.value
                                    }
                                }
                            }))
                            case 'zipcode' :
                                    return (this.setState({
                                        personalDetails: {
                                            ...this.state.personalDetails,
                                        address : {
                                            ...this.state.personalDetails.address,
                                            zipCode: event.target.value
                                        }
                                        }
                                    }))
                                    case 'landline' :
                                            return (this.setState({
                                                personalDetails: {
                                                    ...this.state.personalDetails,
                                                contact: {
                                                    ...this.state.personalDetails.contact,
                                                    landlineNumber: event.target.value
                                                }
                                            }
                                            }))
                                            case 'mobile' :
                    return (this.setState({
                        personalDetails: {
                            ...this.state.personalDetails,
                            contact: {
                            ...this.state.personalDetails.contact,
                            mobileNumber: event.target.value
                        }
                    }
                    }))
                    case 'email' :
                    return (this.setState({
                        personalDetails: {
                            ...this.state.personalDetails,
                            contact: {
                                ...this.state.personalDetails.contact,
                            email: event.target.value
                            }
                        }
                    }))  
                    case 'title' :
                    return (this.setState({
                        jobDetails: {
                            ...this.state.jobDetails,
                            title: event.target.value
                        }
                    }))
                    case 'enumber' :
                    return (this.setState({
                        jobDetails: {
                            ...this.state.jobDetails,
                            employeeNumber: event.target.value
                        }
                    }))
                    case 'location' :
                    return (this.setState({
                        jobDetails: {
                            ...this.state.jobDetails,
                            location: event.target.value
                        }
                    }))
                    case 'department' :
                    return (this.setState({
                        jobDetails: {
                            ...this.state.jobDetails,
                            department: event.target.value
                        }
                    }))
                    case 'salary' :
                    return (this.setState({
                        jobDetails: {
                            ...this.state.jobDetails,
                            salary: event.target.value
                        }
                    }))
                    case 'sss' :
                    return (this.setState({
                        benefitsDetails: {
                            ...this.state.benefitsDetails,
                            SSS: event.target.value
                        }
                    }))
                    case 'philhealth' :
                    return (this.setState({
                        benefitsDetails: {
                            ...this.state.benefitsDetails,
                            PhilHealth: event.target.value
                        }
                    }))
                    case 'pagibig' :
                    return (this.setState({
                        benefitsDetails: {
                            ...this.state.benefitsDetails,
                            PAGIBIG: event.target.value
                        }
                    }))
                    case 'bir' :
                    return (this.setState({
                        benefitsDetails: {
                            ...this.state.benefitsDetails,
                            BIR: event.target.value
                        }
                    }))           
        default: return null;      
    }
}
 
    handleSubmit(event) {
        const payload = {
               personalDetails: this.state.personalDetails,
               jobDetails: this.state.jobDetails,
               benefitsDetails: this.state.benefitsDetails
        }      
        this.props.updateEmployee(this.state.selectedKey,payload).then(() => {
            this.props.readEmployees();
            this.setState({
                onView : !this.state.onView,
                onEdit : !this.state.onEdit
            });
        });

        alert(this.state)
        console.log(payload)
        event.preventDefault()
    }

    handleCreateSubmit(event) {
        const payload = {
            personalDetails: this.state.personalDetails,
            jobDetails: this.state.jobDetails,
            benefitsDetails: this.state.benefitsDetails
        }
         this.props.createEmployee(payload).then(() => {
            this.props.readEmployees();
            this.setState({
                onView : !this.state.onView,
                onCreate : !this.state.onCreate
            });
        })
        console.log(payload)
        event.preventDefault()
    }

    // deleteEmployeeRecord() {
    //     const payload = {
    //         personalDetails: this.state.personalDetails,
    //         jobDetails: this.state.jobDetails,
    //         benefitsDetails: this.state.benefitsDetails
    //     }
    // //    this.props.deleteEmployee(this.state.selectedKey).then(() => {
    // //        this.props.readEmployees();
    // //         this.setState({
    // //             onView : !this.state.onView
    // //         })
    // //    })
    // console.log("delete", payload)
    // }
   
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
                            onView: true,
                            selectedKey: _id,
                            personalDetails: personalDetails,
                            jobDetails: jobDetails,
                            benefitsDetails: benefitsDetails    
                        }) 
                    }}> View </button>

                    {/* <button> View </button> */}
                    {/* Delete */}
                    <button onClick={() => {
                        this.setState ({
                            selectedKey : _id
                        },
                        () => {
                            console.log(this.state.selectedKey)
                            this.props.deleteEmployee(this.state.selectedKey).then(() => {
                                this.props.readEmployees();
                            })
                        })
                    }}> Delete </button>
                   {/* {
                        this.state.onDelete && this.state.selectedKey === _id ? this.props.deleteEmployee(this.state.selectedKey) : null
                   } */}
                    {
                        this.state.onView && this.state.selectedKey === _id ? (                   
                        <EmployeeTable
                           personalDetails={personalDetails}
                           jobDetails={jobDetails}
                           benefitsDetails={benefitsDetails} 
                           onUpdateForm={this.handleUpdateForm.bind(this)}
                        />
                        ): null
                    }
                    {
                        this.state.onEdit && this.state.selectedKey === _id ? this.renderForm(personalDetails,jobDetails,benefitsDetails) : null
                    }
                    
                </div>
            );
        });
        return employeeItem;
    }

    //form for update
    renderForm() {
        return (
            <form onSubmit = {this.handleSubmit}>
                    <input type="text"
                            name="fname" 
                            value = {this.state.personalDetails.firstName}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text" 
                            name="mname" 
                            value = {this.state.personalDetails.middleName}
                            onChange = {(event) => this.handleChange(event)}/>

                    <input type="text"
                            name="lname"                     
                            value = {this.state.personalDetails.lastName}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="gender" 
                            value = {this.state.personalDetails.gender}
                            onChange = {(event) => this.handleChange(event)}/> 
                    <input type="text"
                            name="unitnumber" 
                            value = {this.state.personalDetails.address.unitNumber}
                            onChange = {(event) => this.handleChange(event)}/>
                   <input type="text"
                            name="street" 
                            value = {this.state.personalDetails.address.street}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="city" 
                            value = {this.state.personalDetails.address.city}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="province" 
                            value = {this.state.personalDetails.address.province}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="region" 
                            value = {this.state.personalDetails.address.region}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="zipcode" 
                            value = {this.state.personalDetails.address.zipCode}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="landline" 
                            value = {this.state.personalDetails.contact.landlineNumber}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="mobile" 
                            value = {this.state.personalDetails.contact.mobileNumber}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="email" 
                            value = {this.state.personalDetails.contact.email}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="title" 
                            value = {this.state.jobDetails.title}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="enumber"
                            value = {this.state.jobDetails.employeeNumber}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="location"
                            value = {this.state.jobDetails.location}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="department" 
                            value = {this.state.jobDetails.department}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="salary" 
                            value = {this.state.jobDetails.salary}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text" 
                            name="sss"
                            value = {this.state.benefitsDetails.SSS}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="philhealth" 
                            value = {this.state.benefitsDetails.Philhealth}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="pagibig" 
                            value = {this.state.benefitsDetails.PAGIBIG}
                            onChange = {(event) => this.handleChange(event)}/>
                    <input type="text"
                            name="bir" 
                            value = {this.state.benefitsDetails.BIR}
                            onChange = {(event) => this.handleChange(event)}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        ); 
  }

  //create
  renderCreateForm() {
    
    return (
    <form onSubmit={this.handleCreateSubmit}>
    <input type="text"
            name="fname"
            placeholder= "First Name"
            value= {this.state.personalDetails.firstName}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text" 
            name="mname" 
            placeholder="Middle Name"
            value= {this.state.personalDetails.middleName}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="lname"
            placeholder="Last Name"
            value = {this.state.personalDetails.lastName}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="gender"
            placeholder="Gender"
            value = {this.state.personalDetails.gender}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="unitnumber"
            placeholder="Unit Number"
            value = {this.state.personalDetails.address.unitNumber}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="street" 
            placeholder="Street"
            value = {this.state.personalDetails.address.street}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="city"
            placeholder="City"
            value = {this.state.personalDetails.address.city}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="province"
            placeholder="Province"
            value = {this.state.personalDetails.address.province}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="region" 
            placeholder="Region"
            value = {this.state.personalDetails.address.region}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="zipcode" 
            placeholder="Zip Code"
            value = {this.state.personalDetails.address.zipCode}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="landline" 
            placeholder="Landline"
            value = {this.state.personalDetails.contact.landlineNumber}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="mobile" 
            placeholder="Mobile"
            value = {this.state.personalDetails.contact.mobileNumber}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="email" 
            placeholder="Email"
            value = {this.state.personalDetails.contact.email}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="title" 
            placeholder="Job Details"
            value = {this.state.jobDetails.title}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="enumber" 
            placeholder="Employee Number"
            value = {this.state.jobDetails.employeeNumber}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="location" 
            placeholder="Location"
            value = {this.state.jobDetails.location}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="department" 
            placeholder="Department"
            value = {this.state.jobDetails.department}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="salary" 
            placeholder="Salary"
            value = {this.state.jobDetails.salary}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text" 
            name="sss"
            placeholder="SSS"
            value = {this.state.benefitsDetails.SSS}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="philhealth"
            placeholder="PhilHealth"
            value = {this.state.benefitsDetails.PhilHealth}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="pagibig" 
            placeholder="PAG-IBIG"
            value = {this.state.benefitsDetails.PAGIBIG}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="text"
            name="bir"
            placeholder="BIR"
            value = {this.state.benefitsDetails.BIR}
            onChange = {(event)=> this.handleChange(event)}/>
    <br/>
    <input type="submit" value="Submit"/>
</form>
    )
  }


    render() {
    const {personalDetails,jobDetails,benefitsDetails} = this.props;
        return (
            <div>
                <div className="employee-art">
                    <img src={require('../../assets/employee.png')} />
                </div>
                <div className="employee-list">
                    {this.renderData()}
                </div>
                <div className="employee-card employee-art">
                <button onClick ={() => {
                    this.setState({
                        onCreate : true
                    }) 
                }}>Create</button>
                {
                    this.state.onCreate ? this.renderCreateForm() : null
                }
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


export default connect(mapStatetoProps, { readEmployees, updateEmployee, createEmployee, deleteEmployee })(EmployeePage);
