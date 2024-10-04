const highLightMatch = (athorOrTitle, searchData) => {
    if (searchData) {
        return athorOrTitle
            .split(new RegExp(`(${searchData})`, 'gi'))
            .map((part, index) => {
                if (part.toLowerCase() === searchData.toLowerCase()) {
                    return (
                        <strong className="highlight" key={index}>
                            {part}
                        </strong>
                    );
                } else {
                    return part;
                }
            });
    } else {
        return athorOrTitle;
    }
};

export default highLightMatch;
