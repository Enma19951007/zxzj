<template>
  <div class="container">
    <my-header title="登陆" is-back></my-header>
    <div class="title-container">
      <div class="main-title">在线助教</div>
      <div class="text-title">随便写点什么的学习系统</div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <input class="‘input-item’" type="text" placeholder="请输入账号" v-model="userName" />
      </div>
      <div class="form-item">
        <input class="‘input-item’" type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="form-item">
        <button
          class="submit-button"
          :class="{buttonClass:!isdisabled}"
          :disabled="isdisabled"
          @click="login()"
        >登陆</button>
      </div>
      <div style="padding:10px;" @click="setUserName()">自动填写</div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import { setTimeout } from 'timers';
export default {
  name: "login",
  components: {
    myHeader
  },
  watch: {
    userName: function() {
      if (this.userName === "admin" && this.password == "123456") {
        this.isdisabled = false;
      } else {
        this.isdisabled = true;
      }
    },
    password: function() {
      if (this.userName === "admin" && this.password == "123456") {
        this.isdisabled = false;
      } else {
        this.isdisabled = true;
      }
    }
  },
  data: function() {
    return {
      userName: "",
      password: "",
      isdisabled: true
    };
  },
  methods: {
    login() {
      sessionStorage.setItem("userName", "admin");
      this.$toast("登陆成功，即将跳转");
      setTimeout(()=>{
        this.$router.go(-1);
      },500)
    },
    setUserName() {
      this.userName = "admin";
      this.password = "123456";
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.title-container {
  margin-top: 50px;
  width: 100%;
  height: 25vh;
  text-align: center;
  .main-title {
    padding-top: 7vh;
    font-size: 3.5vh;
    font-weight: 500;
    letter-spacing: 5px;
    color: #303133;
  }
  .text-title {
    font-size: 3vh;
    height: 10vh;
    line-height: 10vh;
    color: #606266;
  }
}
.form-container {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-item {
    width: 80vw;
    height: 50px;
    input {
      width: 100%;
      border: 1px solid #fff;
      border-bottom: 1px solid #dcdfe6;
      padding: 5px 10px 5px 10px;
    }
    button {
      width: 100%;
      height: 35px;
      border: 1px solid #dcdfe6;
      border-radius: 20px;
      letter-spacing: 10px;
      text-indent: 10px;
    }
    .buttonClass {
      background: #67c23a;
      color: #303133;
    }
  }
}
</style>
