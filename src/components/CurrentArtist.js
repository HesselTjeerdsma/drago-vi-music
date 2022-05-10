import React from "react";
import { connect } from "react-redux";
import "./CurrentArtist.css";
import { selectSong } from "../actions";

const CurrentArtist = ({
    selectedSongId = 0,
    songs,
}) => {
    return (
        <div className="current-artist">
        <img
          src={songs[selectedSongId].links.images[0].url}
          alt={songs[selectedSongId].author}
        />
        <p className="artist-name">{songs[selectedSongId].author} - {songs[selectedSongId].name}</p>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(CurrentArtist);
