import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from "enzyme-to-json";
import { EmployeeTable }  from '../../EmployeeTable';

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
Enzyme.configure({ adapter: new Adapter() });

describe('Employee Table Component test', () => {
    it('should simulate click event on material-ui Delete IconButton', () => {
        const onUpdateForm = jest.fn();
        const detail = {
            personalDetails: {
                firstName: "Diana",
                lastName: "Cuerto",
                middleName: "Filamina",
                gender: "Female",
                title: "Ms",
                address: {
                    unitNumber: "3-F",
                    street: "Alley 28",
                    city: "Quezon City",
                    province: "Manila",
                    region: "NCR",
                    zipCode: 1100
                },
                contact: {
                    landlineNumber: "455-42-52",
                    mobileNumber: "09173942673",
                    email: "dianca_cueto@gmail.com"
                }
            },
            jobDetails: {
                title: "Software Engineer",
                employeeNumber: "EMP-1002",
                location: "Buendia Branch",
                department: "Engineering Department",
                email: "diana_cueto@pearlpay.com",
                salary: 35000
            },
            benefitsDetails: {
                SSS: "0407514490",
                Philhealth: "02050905813",
                PAGIBIG: "123456789101",
                BIR: "265683857000"
            }
        }
        const wrapper = shallow(<EmployeeTable
            personalDetails = {detail.personalDetails}
            jobDetails = {detail.jobDetails}
            benefitsDetails = {detail.benefitsDetails}
            onUpdateForm={onUpdateForm}/>);
        wrapper.find('button').simulate("click");
        wrapper.find('button').simulate("click");
        expect(onUpdateForm.mock.calls.length).toEqual(2);
    })
    it("renders Employee Table Component", () => {
        const detail = {
                personalDetails: {
                    firstName: "Diana",
                    lastName: "Cuerto",
                    middleName: "Filamina",
                    gender: "Female",
                    title: "Ms",
                    address: {
                        unitNumber: "3-F",
                        street: "Alley 28",
                        city: "Quezon City",
                        province: "Manila",
                        region: "NCR",
                        zipCode: 1100
                    },
                    contact: {
                        landlineNumber: "455-42-52",
                        mobileNumber: "09173942673",
                        email: "dianca_cueto@gmail.com"
                    }
                },
                jobDetails: {
                    title: "Software Engineer",
                    employeeNumber: "EMP-1002",
                    location: "Buendia Branch",
                    department: "Engineering Department",
                    email: "diana_cueto@pearlpay.com",
                    salary: 35000
                },
                benefitsDetails: {
                    SSS: "0407514490",
                    Philhealth: "02050905813",
                    PAGIBIG: "123456789101",
                    BIR: "265683857000"
                }
            }
        const wrapper = render(
            <EmployeeTable
                personalDetails = {detail.personalDetails}
                jobDetails = {detail.jobDetails}
                benefitsDetails = {detail.benefitsDetails}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});