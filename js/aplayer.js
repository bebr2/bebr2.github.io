// !(function() {
//     var oldLoadAp = window.onload;
//     window.onload = function () {
//       oldLoadAp && oldLoadAp();
  
//       new APlayer({
//         container: document.getElementById('aplayer'),
//         fixed: true,
//         autoplay: false,
//         loop: 'all',
//         order: 'random',
//         theme: '#FFD296',
//         preload: 'none',
//         audio: [
//           {
//             name: '富士山下',
//             artist: '陈奕迅',
//             url: 'https://y.qq.com/n/yqq/song/003aAPj81VWrbL.html'
//           }
//         ]
//       });
//     }
//   })();