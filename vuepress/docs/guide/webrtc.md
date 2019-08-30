# 音视频

::: tip 提示

基于WebRTC的音视频解决方案

- 音视频客服
- IM音视频
:::

## 集成

客户端集成步骤

## 部署

服务器部署

- [coturn](/component/coturn.md)

## 会话流程

技术细节

![流程](/xiaper.io/image/webrtc/flow.png)

```bash
邀请视频会话：
A createOffer
A setLocalDescription // A 的 SDP
B setRemoteDescription // A 的 SDP
B createAnswer
B setLocalDescription // B 的 SDP
A setRemoteDescription // B 的 SDP
B received remote stream，此时，接收端已经可以播放视频。接着，触发 B 的 onaddstream 监听事件。获得远端的 video stream，注意此时 B 的 SDP 协商还未完成。
此时，本地的 A candidate 的状态已经改变，触发 A onicecandidate。开始通过 B.addIceCandidate 方法将 A 添加进去。
A addIceCandidate success。A 添加成功
触发 oniceconnectionstatechange 检查 A 远端 candidate 的状态。当为 completed 状态时，则会触发 B onicecandidate 事件。
B addIceCandidate success。
通话建立
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [WebRTC 官网](https://webrtc.org/start/)
- [WebRTC src && examples](https://webrtc.googlesource.com/src/+/refs/heads/master)
- [WebRTC samples](https://webrtc.github.io/samples/)
- [WebRTC codelab](https://codelabs.developers.google.com/codelabs/webrtc-web/#0)
- [Getting Started with WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/basics/)
- [CoTurn](https://github.com/coturn/coturn)
- [TrickleICE:测试Coturn是否正确部署](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)
- [WebRTC 点对点直播](https://cloud.tencent.com/developer/article/1004661)
