interface IAudioPlayer{
    playAudio();
}

interface IVideoPlayer{
    playVideo();
}


class DVDPlayer implements IAudioPlayer,IVideoPlayer{
    playVideo() {
        throw new Error("Method not implemented.");
    }
    playAudio() {
        throw new Error("Method not implemented.");
    }

}

class Radio implements IAudioPlayer{
    playAudio() {
        throw new Error("Method not implemented.");
    }

}