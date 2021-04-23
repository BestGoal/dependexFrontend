export const sessionCheck = async () => {
		return { auth: { isAuth: false }}
	// try{
	// 	const instance = axios.create({
	// 		baseURL: Root.adminurl,
	// 		timeout: 3000,
	// 		headers: {
	// 			'authorization': `${getSession()}`,
	// 			"Content-Type": "application/json",
	// 		}
	// 	});
	// 	let Response =  await instance.post("auth/sessionCheck");
	// 	if(Response.data) {
	// 		if(Response.data.status) {
	// 			return {
	// 				auth: { 
	// 					isAuth: true,
	// 					isLoading: false,
	// 					userData: Response.data.data.user,
	// 					playerData: Response.data.data.player,
	// 				}
	// 			}
	// 		} else if(!Response.data.status && Response.data.isSession === true) {
	// 			return { auth: { isAuth: false }}
	// 		} else {
	// 			return { auth: { isAuth: false }}
	// 		}
	// 	} else {
	// 		return { auth: { isAuth: false }}
	// 	}
	// } catch(e) {
	// 	return { auth: { isAuth: false }}
	// }
}