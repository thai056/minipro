import React,{useState} from 'react';
import './InputForm.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { bearActions } from '../redux/store'
import { formActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import { Button ,Modal} from 'react-bootstrap';
const InputForm = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const actionsBear = bindActionCreators(bearActions, useDispatch());
    const actionsForm = bindActionCreators(formActions, useDispatch());
    const form = useSelector(state => state.form)
    const bears = useSelector(state => state.bear)
    const addBear = async () => {
        await axios.post(`http://localhost/api/bears`, form)
        actionsBear.addBear(bears, form)
    }
    const Modal_ = (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input className='inpt' type="text" onChange={(e) => actionsForm.changeName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>
                                <input className='inpt' type="number" onChange={(e) => actionsForm.changeWeight(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td>
                                <input className='inpt' type="text" onChange={(e) => actionsForm.changeImg(e.target.value)} /> <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
              </Button>
                <Button variant="primary" onClick={addBear}>
                    Create
              </Button>
            </Modal.Footer>
        </Modal>
    )
    return (
        <div className='form-container'>
            {Modal_}
            <div>
                <Button variant="outline-primary" onClick={handleShow}>
                    ADD WATER
                </Button>
            </div>
            {/* <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => actionsForm.changeName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => actionsForm.changeWeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => actionsForm.changeImg(e.target.value)} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button variant="outline-primary" onClick={addBear}>CREATE</Button>
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default InputForm