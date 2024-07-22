interface TagsProps {
    tags?: string[],
}

const Tags: React.FC<TagsProps> = ({
    tags = [],
}) => {
    return (
        <div className="tags" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem"
        }}>
            {tags.map((tag, index) => (
                <button key={index} className="tag">
                    {tag}
                </button>
            ))}
        </div>
    );
}

export default Tags;