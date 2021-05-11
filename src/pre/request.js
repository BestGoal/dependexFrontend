import axios from "axios";

const Axios = async (method, data, url) => {
    const options = {
        method,
        url,
        data
    };
    let rdata = await axios(options);
    if (rdata.status === 200 && rdata.data) {
        return rdata.data
    } else {
        return { status: false }
    }
}

export default Axios