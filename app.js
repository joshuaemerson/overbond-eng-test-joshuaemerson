// helper function used to format the data recieved from the file
async function formatData(filePath) {
  // use the helper function formatData to obtain the file data as JSON
  const fileData = await loadFileContents(filePath);

  const fileDataAsArray = fileData.split(/\r?\n/);

  // create an empty arrays to add data to
  const issuanceDates = [];
  const cleanBids = [];
  const cleanAsks = [];
  const lastPrices = [];

  // go through each index of th array anc check for the values we are interested in
  for (let i = 0; i < fileDataAsArray.length; i++) {
    if (fileDataAsArray[i].includes("DIs", 4)) {
      let dateIndex = fileDataAsArray[i].indexOf("DIs");
      let issaunceDate = fileDataAsArray[i].substring(
        dateIndex,
        dateIndex + 11
      );
      // when we encounter an issuance date, add it to the issuanceDates array
      issuanceDates.push(
        `${issaunceDate.substring(3, 7)}/${issaunceDate.substring(
          7,
          9
        )}/${issaunceDate.substring(9, 11)}`
      );
    }

    if (fileDataAsArray[i].includes("BPr")) {
      let cleanBidIndex = fileDataAsArray[i].indexOf("BPr");
      let commaIndex = fileDataAsArray[i].indexOf(",", cleanBidIndex);
      let cleanBid = fileDataAsArray[i].substring(cleanBidIndex, commaIndex);
      // when we encounter a clean bid, add it to the cleanBids array
      cleanBids.push(cleanBid.substring(3));
    }

    if (fileDataAsArray[i].includes("APl")) {
      let cleanAskIndex = fileDataAsArray[i].indexOf("APl");
      let commaIndex = fileDataAsArray[i].indexOf(",", cleanAskIndex);
      let cleanAsk = fileDataAsArray[i].substring(cleanAskIndex, commaIndex);
      // when we encounter a clean ask, add it to the cleanAsks array
      cleanAsks.push(cleanAsk.substring(3));
    }

    if (fileDataAsArray[i].includes("Pl")) {
      let apiIndex = fileDataAsArray[i].indexOf("APl");
      let lastPriceIndex = fileDataAsArray[i].indexOf("Pl", apiIndex + 4);
      let commaIndex = fileDataAsArray[i].indexOf(",", lastPriceIndex);
      let lastPrice = fileDataAsArray[i].substring(lastPriceIndex, commaIndex);
      // when we encounter a last price, add it to the lastPrices array
      lastPrices.push(lastPrice.substring(2));
    }
  }

  // merge all the values accumulated into one array to make it easier to plot
  const mergedArray = [issuanceDates, cleanBids, cleanAsks, lastPrices];
  console.log(mergedArray);
  return mergedArray;
}

// helper function used to load the content of file with relative path filePath and parse it as text
async function loadFileContents(filePath) {
  try {
    const res = await fetch(filePath);
    const data = await res.text();
    return data;
  } catch (error) {
    console.log(`Error occured with message: ${error}`);
  }
}

// file path is the relative path of the file that has the data you want to graph
// only this function needs to be called
async function createScatterPlots(filePath) {
  const graphData = await formatData(filePath);

  const cleanBidData = {
    x: graphData[0],
    y: graphData[1],
    mode: "markers",
    type: "scatter",
    name: "Clean Bid",
  };

  const cleanAskData = {
    x: graphData[0],
    y: graphData[2],
    mode: "markers",
    type: "scatter",
    name: "Clean Ask",
  };

  const lastPriceData = {
    x: graphData[0],
    y: graphData[3],
    mode: "markers",
    type: "scatter",
    name: "Last Price",
  };

  const data = [cleanBidData, cleanAskData, lastPriceData];

  Plotly.newPlot("myDiv", data);
}

// function call used to create the scatterplot and display it through the browser via index.html file
// currently called with "test.csv" but you can replace this with the relative path of the file you want to test
createScatterPlots("./test.csv");

module.exports = { formatData, loadFileContents, createScatterPlots };
