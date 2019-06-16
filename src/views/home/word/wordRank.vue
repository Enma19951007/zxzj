<template>
  <div class="container">
    <my-header :title="title" isBack isList :actions="actions" @chooseItem="chooseItem"></my-header>
    <div style="height:50px;"></div>
    <div class="main-container">
      <div style="height:80px;">
        <div class="name-container">
          <div class="name-item">
            <my-img :src="imgSrc" style="margin:15px;"></my-img>
            <div class="name-text">
              <div>{{listData[0].name}}</div>
              <div style="font-weight:600;">第1名</div>
            </div>
          </div>
        </div>
        <div class="button-item">
          <div @click="toastMsg()">炫耀一下</div>
        </div>
      </div>
      <div class="word-container">
        <div>
          <div style="font-size:8vw;">单词量</div>
          <div style="font-weight:600;">{{listData[0].score}}</div>
        </div>
      </div>
    </div>
    <div class="list-container">
      <div class="list-title">
        <div style="float:left;margin-left:15px">排行榜</div>
        <div style="float:right;margin-right:15px">单词量</div>
      </div>
      <div class="list-item">
        <div style="height:80px;" v-for="item in listData" :key="item.score">
          <div class="name-container">
            <div class="name-item">
              <my-img :src="imgSrc" style="margin:15px;"></my-img>
              <div class="name-text">
                <div>{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="button-item">
            <div>{{item.score}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myImg from "@/components/radiusImg";
export default {
  name: "speak",
  components: {
    myHeader,
    myImg
  },
  data() {
    return {
      actions: [{ name: "全部同学" }, { name: "一年级" }, { name: "二年级" }],
      imgSrc: require("./../../../assets/logo.png"),
      listData: [
        {
          name: "学生A",
          score: "10"
        },
        {
          name: "学生B",
          score: "6"
        },
        {
          name: "学生C",
          score: "5"
        },
        {
          name: "学生B",
          score: "3"
        },
        {
          name: "学生C",
          score: "2"
        },
        {
          name: "学生C",
          score: "1"
        }
      ],
      title: "全部同学"
    };
  },
  methods: {
    gotoPath(value) {
      this.$router.push(value);
    },
    chooseItem(value) {
      if (value.name == "全部同学") {
        this.title = "全部同学";
        this.listData = [
          {
            name: "学生A",
            score: "10"
          },
          {
            name: "学生B",
            score: "6"
          },
          {
            name: "学生C",
            score: "5"
          },
          {
            name: "学生B",
            score: "3"
          },
          {
            name: "学生C",
            score: "2"
          },
          {
            name: "学生C",
            score: "1"
          }
        ];
      } else if (value.name == "一年级") {
        this.title = "一年级";
        this.listData = [
          {
            name: "学生B",
            score: "6"
          }
        ];
      } else if (value.name == "二年级") {
        this.title = "二年级";
        this.listData = [
          {
            name: "学生C",
            score: "1"
          }
        ];
      }
    },
    toastMsg() {
      this.$toast("即将上线,敬请期待");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  // overflow: hidden;
  color: #84d5d3;
}
.main-container {
  height: calc(50vh - 50px);
  width: 100vw;
  .name-container {
    height: 80px;
    float: left;
    .name-item {
      display: flex;
      align-items: center;
      height: 100%;
      .name-text {
        display: inline-block;
        div {
          margin-top: 3px;
          height: 23px;
          line-height: 23px;
          font-size: 18px;
        }
      }
    }
  }
  .button-item {
    height: 80px;
    float: right;
    display: flex;
    align-items: center;
    margin-right: 20px;
    div {
      border: 1px solid #84d5d3;
      padding: 3px 5px 3px 5px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
}
.word-container {
  background: #feae005e;
  width: 80%;
  margin: 20px auto 0px;
  height: calc(50vh - 170px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  div {
    text-align: center;
    width: 30vw;
    margin: 0 auto;
    font-size: 10vw;
    color: #3fcfc4;
  }
}
.list-container {
  height: 50vh;
  color: #8d8d8d;
  .list-item {
    overflow-y: scroll;
    height: calc(100% - 30px);
  }
  .list-title {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #878787;
    background: #fafafa;
  }
  .name-container {
    height: 80px;
    float: left;
    .name-item {
      display: flex;
      align-items: center;
      height: 100%;
      .name-text {
        display: inline-block;
        div {
          margin-top: 3px;
          height: 23px;
          line-height: 23px;
          font-size: 18px;
        }
      }
    }
  }
  .button-item {
    height: 80px;
    float: right;
    display: flex;
    align-items: center;
    margin-right: 20px;
    div {
      font-size: 20px;
    }
  }
}
</style>
