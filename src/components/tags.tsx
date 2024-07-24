import "./tags.css";

interface TagsProps {
    tags?: string[],
}

const Tags: React.FC<TagsProps> = ({
    tags = [],
}) => {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <button key={index} className="tag">
                    {tag}
                </button>
            ))}
        </div>
    );
}

export default Tags;