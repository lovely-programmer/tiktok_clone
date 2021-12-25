import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/9da9e78af41652df6529d12ff98a30ad/61c6aa56/video/tos/useast2a/tos-useast2a-ve-0068c002/a50011af419b4f28a9fd9fd7367dbb96/?a=1988&amp;br=3222&amp;bt=1611&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=Yu12_FlWkag3-I&amp;l=20211224232027010223084143167E772B&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=amtpcGU6ZmVkOTMzNzczM0ApNWZlNTplNWRoNztpNjc1OGdvaGYtcjQwZDRgLS1kMTZzczBjLS80XjFeMjFeMDZhYTE6Yw%3D%3D&amp;vl=&amp;vr="
          channel="wealth"
          description="Just had to do something with this sound 😅"
          song="♬ Nerih_Pas le temps - Nerih"
          likes={100}
          messages={200}
          share={150}
        />

        <Video
          url="https://v16-webapp.tiktok.com/ccc5893b3a241a23c4525c2eba786c7c/61c6aa2d/video/tos/useast2a/tos-useast2a-ve-0068c004/d400eb5c0d6742fdb6bbe6db43608da0/?a=1988&amp;br=3086&amp;bt=1543&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=Yu12_FlWkag3-I&amp;l=20211224232027010223084143167E772B&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M2pxMzU6Zm9uOTMzNzczM0ApNmhlO2RlZGU1N2YzaDY2NGduYS8xcjRnX21gLS1kMTZzczYxNGEvYi4zMC4wNDNjMjA6Yw%3D%3D&amp;vl=&amp;vr="
          channel="officerwoos"
          description="Big Mood😂😂😂"
          song="♬ Ameno Amapiano - Remix - Goya Menor & Nektunez"
          likes={1000}
          messages={200}
          share={150}
        />

        <Video
          url="https://v16-webapp.tiktok.com/86046e6ccfea4f8a46f2a1d842bbe954/61c77921/video/tos/useast2a/tos-useast2a-pve-0068/39ba6829db5a44e79a7fb2517b4db28c/?a=1988&amp;br=2136&amp;bt=1068&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=Yu12_FlWkag3-I&amp;l=2021122514004401022308301212C9C8E4&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=amc4amg6Zjp3ODMzNzczM0ApaDM3PDVmaWVpN2k1OjU7aWdhYGcvcjQwa2xgLS1kMTZzc18uYy0zMy1fXjJfNC41Yl86Yw%3D%3D&amp;vl=&amp;vr="
          channel="ayrastarr"
          description="Jet lagged and sleepy"
          song="♬ original sound - Ayra Starr"
          likes={1000}
          messages={200}
          share={150}
        />
      </div>
    </div>
  );
}

export default App;
