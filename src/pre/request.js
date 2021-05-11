import axios from "axios";
import { setLoading } from "../redux/action/base/loading";

const Axios = async (method, data, url, dispatch, loading = false) => {
    const options = {
        method,
        url,
        data
    };
    if(loading) {
        dispatch(setLoading(true))
    }
    let rdata = await axios(options);
    if(loading) {
        dispatch(setLoading(false))
    }
    if (rdata.status === 200 && rdata.data) {
        return rdata.data
    } else {
        return { status: false }
    }
}

export default Axios