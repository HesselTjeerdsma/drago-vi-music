import "./SongListHeader.css";

const SongListHeader = () => {
    return (
        <div className="song-item header">
            <div className="index">#</div>
            <div className="name">Titel</div>
            <div className="author">Zanger</div>
        </div>
    );
};

export default SongListHeader;
