import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Còn Gì Đau Hơn Chữ Đã Từng',
    artist: 'Quân A.P',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/anh%2Fanh1.jpg?alt=media&token=15316832-c8ed-4a2e-91ee-2cd7abfcda4a",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/song%2FCon-Gi-Dau-Hon-Chu-Da-Tung-Quan-A-P.mp3?alt=media&token=15c2d66a-7392-426a-8fea-4ef9751e184f",
  },
  {
    title: 'Là Bạn Không Thể Yêu',
    artist: 'Lou Hoàng',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/anh%2Fanh2.jpg?alt=media&token=c29de181-a81f-4d4c-a44d-830f2edbbe47",
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/song%2FLa-Ban-Khong-The-Yeu-Lou-Hoang.mp3?alt=media&token=a8159b37-9259-4de4-9e3c-c2720a4de96b',
  },
  {
    title: 'Mạnh Mẽ Lên Cô Gái',
    artist: 'Anh Tú',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/anh%2Fanh3.jpg?alt=media&token=30cf9f2e-6ef7-49d3-a7b7-d96776a9c19b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-70386.appspot.com/o/song%2FManh-Me-Len-Co-Gai-Anh-Tu.mp3?alt=media&token=8b989603-9af2-4f1f-bfad-02ec3be3fd70',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


