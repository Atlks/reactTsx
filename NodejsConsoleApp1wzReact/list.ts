
export async function fetchData8() {
    console.log("function fetchData");

    console.log(1157)
    //Invalid hook call. Hooks can only be called inside of the body of a function component

    console.log(1158)
    // setLoading(true); // ??????
    //  setError(null); // ???????
    try {
        const response = await fetch('http://localhost:8080/list422.json');
        // ??JSON??
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json(); // ??JSON??
        console.log(1155)

        return result
     //   console.log(1156)

    } catch (error) {
        console.log(error)
        //  setError(error); // ??????
    } finally {
        // setLoading(false); // ??????
    }
}