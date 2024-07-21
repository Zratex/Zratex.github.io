function Tags({
    tags = [],
}) {
    return (
        <div className="tags" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem"
        }}>
            {tags.map((tag) => (
                <button className="tag">
                    {tag}
                </button>
            ))}
        </div>
    );
}

export default Tags;