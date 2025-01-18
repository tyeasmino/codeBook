
export const signUp = async ( authDetail ) => {

    const requestOption = {
        method: "post",
        headers: {"content-Type" : "application/json"},
        body: JSON.stringify(authDetail)
    }

    // ${process.env.REACT_APP_API_URL}
    const response = await fetch("http://localhost:8000/register", requestOption)

    const data  = await response.json()
    if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }
    return data

    // JWT Json Web Token  
}
