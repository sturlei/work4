import { FC } from "react";
import  { Link }  from  "react-router-dom";



const IndexPage: FC = () => { 


    return (
        <>
            This is the indexpage - <Link to='dashboard'>Go to Dashboard</Link>
        </>
    )
}

export default IndexPage;