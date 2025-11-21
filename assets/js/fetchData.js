console.log("fetchData attached");

async function fetchData(query) {
  try {
    const response = await fetch(query);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    // console.log("%cfetch successful ", "color:chartreuse;background: black");
    // console.log(
    //   "%cfetch successful ",
    //   "color:chartreuse;background: black",
    //   data,
    //   data.result
    // );
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
