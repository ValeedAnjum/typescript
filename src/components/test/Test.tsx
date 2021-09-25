
import { count } from 'console';
import React , {useRef, useState} from 'react'

interface Props {
    test:object ,
    name?:string,
    handleChange:(e:React.InputHTMLAttributes<HTMLInputElement>) => void
}
const Test:React.FC<Props> = (props) => {
    const [count, setCount] = useState<number | string>(6);
    const inpuRef = useRef<HTMLInputElement>(null);
    const {test,handleChange}  = props;
    const incCounter = () => {
        setCount("a");
    }

    return (
        <div onClick={incCounter}  >
            {JSON.stringify(test)}
            {count}
            <input onChange={handleChange}  />
        </div>
    )
}

export default Test
