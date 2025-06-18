import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, getStudentCSV, registerStudent, updateStudent } from '../slice';

export default function Student() {
    const name = useSelector((state) => state.student.name)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch(registerStudent())}>add</button>
            <button onClick={() => updateStudent()}>update</button>
            <button onClick={() => deleteStudent()}>delete</button>
            <button onClick={() => getStudentCSV()}>csv</button>
        </div>
    )
}