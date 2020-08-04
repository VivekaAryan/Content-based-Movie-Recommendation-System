new autoComplete({
    data: {
      src: Title,
    },
    selector: "#autoComplete",
    threshold: 3,
    debounce: 100,
    searchEngine: "strict",
    resultsList: {
        render: true,
        container: source => {
            source.setAttribute("id", "food_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 6,
    highlight: true,
    resultItem: {
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    }
});