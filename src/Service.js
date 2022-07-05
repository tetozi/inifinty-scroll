

const url = `https://mdatsev.dev/token-api?offset=`
//(`${baseUrl}/course/${courseId}/reviews?page=${pageNumber}`

export const getAll = async (pageNumber) => {

    let response = await fetch(`${url}${pageNumber}&limit=9`)
    let jsonResult = await response.json();
    console.log(jsonResult)
    try {
        if (jsonResult.result) {
            
         const result = jsonResult.result
            return result
        }
        else{
        let error =   jsonResult.error.message
        console.log(error)
        return error
        }

    } catch (error) {
        console.log(error)
      return alert(error.message)
    }
}