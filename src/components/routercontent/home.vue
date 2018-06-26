<template>
    <div class="n-home">
        <Row>
            <Col span="10">
            <div class="content-left">
                <div class="avatar">
                    <img width="100" height="100" src="../avatar/avatar.jpg" alt="">
                </div>
                <div class="user">
                    丘维果
                </div>
                <div class="detail">
                    <h4>成功关注企业号方法：</h4>
                    <div class="detail-text">
                        <p>
                            <i class="cricle"></i> 进入系统管理-->通讯录：添加自己的信息（微信号、手机、邮箱三者不可同时为空，且与微信邦定的一致）</p>
                        <p>
                            <i class="cricle"></i>扫描以下二维码关注</p>
                        <br>
                        <p class="qr-code">
                            <img width="150" height="150" src="../avatar/qr-code.png" alt="">
                        </p>
                    </div>
                </div>
            </div>
            </Col>
            <Col span="14">
            <div class="content-right">
                <div class="date">
                    <h2>{{time | formatDate}}</h2>
                </div>
                <div class="ibox">
                    <div class="ibox-title">
                        <h4>最新动态</h4>
                    </div>
                    <div class="ibox-content">
                        <div class="vertical-timeline">
                            <Timeline>
                                <TimelineItem color="green">发布百威英博Portal系统1.0版本</TimelineItem>
                                <TimelineItem color="green">发布百威英博Portal系统2.0版本</TimelineItem>
                                <TimelineItem color="red">严重故障</TimelineItem>
                                <TimelineItem color="blue">发布百威英博Portal系统3.0版本</TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import { formatDate } from "../../common/js/dom";
export default {
  data() {
    return {
      time: Date.now()
    };
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style scoped>
.n-home {
  padding: 20px;
}
.content-left {
  padding: 20px;
  height: 100%;
  text-align: center;
}
.avatar img {
  border-radius: 50%;
}
.user {
  height: 40px;
  line-height: 40px;
  font-size: 164x;
  color: #333;
  font-weight: 600;
}
.detail {
  text-align: left;
}
.detail h4 {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  color: #f00;
}
.detail-text p {
  display: inline-block;
  line-height: 24px;
  font-size: 12px;
}
i {
  display: inline-block;
  width: 10px;
  height: 10px;
  font-style: normal;
  background: #777;
  border-radius: 50%;
  margin-right: 5px;
}
.detail-text .qr-code {
  margin-top: 20px;
  text-align: center;
  display: block;
}
.content-right {
  padding: 20px 40px;
}
.content-right .date {
  text-align: right;
  color: #4587c4;
}
.content-right .date h2 {
  font-size: 16px;
  font-weight: normal;
}
.ibox-title {
  height: 48px;
  line-height: 48px;
}
.ibox-title h4 {
  font-size: 14px;
}
.ibox-content {
  padding: 20px;
  font-size: 24px;
}
.ivu-timeline-item-content {
  font-size: 14px;
}
</style>
