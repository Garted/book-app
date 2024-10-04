const highlightMatch = (athorOrTitle, searchData) => {
    if (searchData) {
        return athorOrTitle
            .split(new RegExp(`(${searchData})`, 'gi'))
            .map((part, index) =>
                part.toLowerCase() === searchData.toLowerCase() ? (
                    <strong className="highlight" key={index}>
                        {part}
                    </strong>
                ) : (
                    part
                )
            );
    } else {
        return athorOrTitle;
    }
};

export default highlightMatch;
