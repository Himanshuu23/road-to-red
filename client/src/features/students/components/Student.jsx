import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents, registerStudent } from '../slice'

export default function Student() {
    const name = useSelector((state) => state.student.name)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch(getAllStudents())}>test get</button>
            <button onClick={() => dispatch(registerStudent({ name: "user", emai: "email@user.com", phone: "1010101010", codeforcesHandle: "user@cf" }))}>test post</button>
        </div>
    )
}